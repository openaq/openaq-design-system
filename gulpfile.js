'use strict';

const fs = require('fs');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const del = require('del');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const log = require('fancy-log');
const SassString = require('node-sass').types.String;
const notifier = require('node-notifier');
const through2 = require('through2');
const OPENAQ_ADDONS = require('./gulp-addons');

const {
  compile: collecticonsCompile
} = require('collecticons-processor');

// /////////////////////////////////////////////////////////////////////////////
// --------------------------- Variables -------------------------------------//
// ---------------------------------------------------------------------------//

const bs = browserSync.create();

// Environment
// Set the correct environment, which controls what happens in config.js
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.DS_ENV = process.env.DS_ENV || process.env.NODE_ENV;

// When being built by circle is set to staging unless we're in the prod branch
if (process.env.CIRCLE_BRANCH) {
  if (process.env.CIRCLE_BRANCH === process.env.PRODUCTION_BRANCH) {
    process.env.NODE_ENV = 'staging';
    process.env.DS_ENV = 'staging';
  } else {
    process.env.NODE_ENV = 'production';
    process.env.DS_ENV = 'production';
  }
}

// /////////////////////////////////////////////////////////////////////////////
// ------------------------- Helper functions --------------------------------//
// ---------------------------------------------------------------------------//

const isProd = () => process.env.NODE_ENV === 'production';
const readPackage = () => JSON.parse(fs.readFileSync('package.json'));

// /////////////////////////////////////////////////////////////////////////////
// ------------------------- Callable tasks ----------------------------------//
// ---------------------------------------------------------------------------//

function clean () {
  return del(['.tmp', 'dist']);
}

function serve () {
  bs.init({
    port: 3000,
    server: {
      baseDir: ['.tmp', 'sandbox'],
      routes: {
        '/node_modules': './node_modules'
      },
      ghostMode: false,
      middleware: [
        OPENAQ_ADDONS.graphicsMiddleware(fs)
      ]
    }
  });

  // watch for changes
  gulp.watch([
    'sandbox/**/*.html',
    'sandbox/assets/graphics/**/*',
    '!sandbox/assets/graphics/collecticons/**/*'
  ], bs.reload);

  gulp.watch('assets/icons/**', openAqIcons);

  gulp.watch([
    'sandbox/assets/styles/**/*.scss',
    'assets/styles/**/*.scss'
  ], styles);
  gulp.watch('sandbox/assets/scripts/**/**', javascript);
  gulp.watch('package.json', vendorScripts);
}

module.exports.clean = clean;
module.exports.serve = gulp.series(
  openAqIcons,
  gulp.parallel(
    vendorScripts,
    javascript,
    styles
  ),
  serve
);
module.exports.default = gulp.series(
  clean,
  gulp.parallel(
    vendorScripts,
    javascript
  ),
  styles,
  gulp.parallel(
    html,
    imagesImagemin
  ),
  extras,
  finish
);
module.exports.openAqIcons = openAqIcons;

// /////////////////////////////////////////////////////////////////////////////
// ------------------------- Browserify tasks --------------------------------//
// ------------------- (Not to be called directly) ---------------------------//
// ---------------------------------------------------------------------------//

// Compiles the user's script files to bundle.js.
// When including the file in the index.html we need to refer to bundle.js not
// main.js
function javascript () {
  // Ensure package is updated.
  const pkg = readPackage();
  return browserify({
    entries: ['./sandbox/assets/scripts/main.js'],
    debug: true,
    cache: {},
    packageCache: {},
    bundleExternal: false,
    fullPaths: true
  })
    .external(pkg.dependencies ? Object.keys(pkg.dependencies) : [])
    .bundle()
    .on('error', function (e) {
      notifier.notify({
        title: 'Oops! Browserify errored:',
        message: e.message
      });
      console.log('Javascript error:', e); // eslint-disable-line
      if (isProd()) {
        throw new Error(e);
      }
      // Allows the watch to continue.
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe($.sourcemaps.init({ loadMaps: true }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('.tmp/assets/scripts/'))
    .pipe(bs.stream());
}

// Vendor scripts. Basically all the dependencies in the package.js.
// Therefore be careful and keep the dependencies clean.
function vendorScripts () {
  // Ensure package is updated.
  const pkg = readPackage();
  var vb = browserify({
    debug: true,
    require: pkg.dependencies ? Object.keys(pkg.dependencies) : []
  });
  return vb.bundle()
    .on('error', log.bind(log, 'Browserify Error'))
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe($.sourcemaps.init({ loadMaps: true }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('.tmp/assets/scripts/'))
    .pipe(bs.stream());
}

// /////////////////////////////////////////////////////////////////////////////
// ------------------------- Collecticon tasks -------------------------------//
// --------------------- (Font generation related) ---------------------------//
// ---------------------------------------------------------------------------//

function openAqIcons () {
  return collecticonsCompile({
    dirPath: 'assets/icons/',
    fontName: 'OpenAQ DS Icons',
    authorName: 'Development Seed',
    authorUrl: 'https://developmentseed.org/',
    styleDest: 'assets/styles/openaq-design-system/core',
    styleName: '_openaq-ds-icons',
    className: 'openaq-ds-icon',
    preview: false
  });
}

// //////////////////////////////////////////////////////////////////////////////
// --------------------------- Helper tasks -----------------------------------//
// ----------------------------------------------------------------------------//

function finish () {
  return gulp.src('dist/**/*')
    .pipe($.size({ title: 'build', gzip: true }));
}

function styles () {
  return gulp.src('sandbox/assets/styles/main.scss')
    .pipe($.plumber(function (e) {
      notifier.notify({
        title: 'Oops! Sass errored:',
        message: e.message
      });
      console.log('Sass error:', e.toString()); // eslint-disable-line
      if (isProd()) {
        throw new Error(e);
      }
      // Allows the watch to continue.
      this.emit('end');
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'expanded',
      precision: 10,
      functions: {
        'urlencode($url)': function (url) {
          var v = new SassString();
          v.setValue(encodeURIComponent(url.getValue()));
          return v;
        }
      },
      includePaths: require('bourbon').includePaths.concat('node_modules/jeet').concat('assets/styles')
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/assets/styles'))
    // https://browsersync.io/docs/gulp#gulp-sass-maps
    .pipe(bs.stream({ match: '**/*.css' }));
}

// After being rendered by jekyll process the html files. (merge css files, etc)
function html () {
  return gulp.src('sandbox/*.html')
    .pipe($.useref({ searchPath: ['.tmp', 'app', '.'] }))
    .pipe(cacheUseref())
    // Do not compress comparisons, to avoid MapboxGLJS minification issue
    // https://github.com/mapbox/mapbox-gl-js/issues/4359#issuecomment-286277540
    // https://github.com/mishoo/UglifyJS2/issues/1609 -> Just until gulp-uglify updates
    .pipe($.if('*.js', $.uglify({ compress: { comparisons: false, collapse_vars: false } })))
    .pipe($.if('*.css', $.csso()))
    .pipe($.if(/\.(css|js)$/, $.rev()))
    .pipe($.revRewrite())
    .pipe(gulp.dest('dist'));
}

function imagesImagemin () {
  return gulp.src([
    'sandbox/assets/graphics/**/*',
    OPENAQ_ADDONS.graphicsPath + '/**/*'
  ])
    .pipe($.imagemin([
      $.imagemin.gifsicle({ interlaced: true }),
      $.imagemin.jpegtran({ progressive: true }),
      $.imagemin.optipng({ optimizationLevel: 5 }),
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling.
      $.imagemin.svgo({ plugins: [{ cleanupIDs: false }] })
    ]))
    .pipe(gulp.dest('dist/assets/graphics'));
}

function extras () {
  return gulp.src([
    'sandbox/**/*',
    '!sandbox/*.html',
    '!sandbox/assets/graphics/**',
    '!sandbox/assets/vendor/**',
    '!sandbox/assets/styles/**',
    '!sandbox/assets/scripts/**'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
}

/**
 * Caches the useref files.
 * Avoid sending repeated js and css files through the minification pipeline.
 * This happens when there are multiple html pages to process.
 */
function cacheUseref () {
  let files = {
    // path: content
  };
  return through2.obj(function (file, enc, cb) {
    const path = file.relative;
    if (files[path]) {
      // There's a file in cache. Check if it's the same.
      const prev = files[path];
      if (Buffer.compare(file.contents, prev) !== 0) {
        this.push(file);
      }
    } else {
      files[path] = file.contents;
      this.push(file);
    }
    cb();
  });
}

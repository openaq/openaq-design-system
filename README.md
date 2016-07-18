# OpenAQ Design System

**Work in progress.** Use at your own risk!  

The following guide only explains how to include the `openaq-design-system` in a new project.

For information on how to develop the `openaq-design-system` checkout the [DEVELOPMENT.md](DEVELOPMENT.md)  

---

Style guide and UI components library that aims to standardize the look and feel across all OpenAQ-related applications, while defining coding best practices and conventions.

Install it as an `npm` module: (module not available yet. use direct link)
```
Good things come to those who wait...
```
For the most recent version omit the tag.

**Note:**
This design system makes some assumptions which are described below for each of the elements.  

## Overview

The shared assets are all in the `assets` directory. It is organized as follows:

### assets/scripts
Utility libraries and shared components.

**USAGE**  
Use as any node module:
```js
import { Dropdown, user } from 'openaq-design-system';
```
If you want to minimize bundle size you can also include the components directly.  
Bindings exported from `openaq-design-system` are also available in `openaq-design-system/assets/scripts`

### assets/styles
Requires [Bourbon](https://github.com/lacroixdesign/node-bourbon) and [Jeet](https://github.com/mojotech/jeet).

**INSTALLATION**  
Add the module path to the `includePaths` of gulp-sass. Should look something like:
```js
.pipe($.sass({
  outputStyle: 'expanded',
  precision: 10,
  includePaths: require('node-bourbon').with('node_modules/jeet/scss', require('openaq-design-system/gulp-addons').scssPath)
}))
```

The `openaq-design-system` uses **Roboto** (body) and **Montserrat** (headings) which is available on [Google Fonts](https://goo.gl/FZ0Ave).  
It needs to be included in the app:
```
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:300,300i,400,400i,700,700i" rel="stylesheet">

```

**USAGE**  
Now you can include it in the main scss file:
```scss
// Bourbon is a dependency
@import "bourbon";

@import "jeet/index";

@import "openaq-design-system";
```

### assets/icons
The `openaq-design-system` includes svg icons that are compiled into a webfont and included in the styles.  
To use them check the `_openaq-ds-icons.scss` for the class names.

### assets/graphics
Graphics that are to be shared among projects.

**INSTALLATION**  
Add the `graphicsMiddleware` to browserSync. This is only to aid development.  
Should look something like:
```js
browserSync({
  port: 3000,
  server: {
    baseDir: ['.tmp', 'app'],
    routes: {
      '/node_modules': './node_modules'
    },
    middleware: require('openaq-design-system/gulp-addons').graphicsMiddleware(fs) // <<< This line
  }
});
```
*Basically every time there's a request to a path like `/assets/graphics/**`, browserSync will check in the `openaq-design-system` folder first. If it doesn't find anything it will look in the normal project's asset folder.*

You also need to ensure that the images are copied over on build.
This ensures that the graphics are copied over when building the project.
```js
gulp.task('images', function () {
  return gulp.src(['app/assets/graphics/**/*', require('openaq-design-system/gulp-addons').graphicsPath + '/**/*'])
    .pipe($.cache($.imagemin({
```

**USAGE**  
Just include the images using the path `assets/graphics/[graphic-type]/[graphic-name]`.  
All available images can be found [here](assets/graphics/).

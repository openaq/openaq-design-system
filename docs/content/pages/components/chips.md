+++

title = "Chips"

+++

Chips can be useful for styling concepts such as topics and can be used to filter content when used on a `<a>`, linking to content pages with the filtered content.

<div class="chip-brand">API<span class="material-symbols-outlined">
    data_object
</span></div>
<div class="chip-base-data">API<span class="material-symbols-outlined">
    data_object
</span></div>
<div class="chip-base-interactive">API<span class="material-symbols-outlined">
    data_object
</span>
</div>

```html
<div class="chip-brand">
    API
    <span class="material-symbols-outlined">
        data_object
    </span>
</div>
<div class="chip-base-data">
    API
    <span class="material-symbols-outlined">
        data_object
    </span>
</div>
<div class="chip-base-interactive">
    API
    <span class="material-symbols-outlined">
        data_object
    </span>
</div>
```


## Mixin

Chips can be created with a sass mixin. The mixin takes a color Map (defaults to `$skys`) as an input parameter. The chip background is given the 10 lightness of the color and text is given the 120 lightness.

```scss
@use 'openaq-design-system/variables' as variables;
@use 'openaq-design-system/mixins' as mixins;

@include mixins.chip(variables.$oceans)

```
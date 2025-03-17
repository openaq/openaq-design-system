+++

title = "Bubble"

+++

Bubbles are purely decorative elements used in the OpenAQ website and OpenAQ explorer application.


<div style="display: grid;
grid-template-columns: repeat(3, 1fr);
column-gap: 10px;">
<div class="bubble-sm"></div>
<div class="bubble-md"></div>
<div class="bubble-lg"></div>
</div>


```html
<div class="bubble-sm"></div>
<div class="bubble-md"></div>
<div class="bubble-lg"></div>
```

## Mixin

In addition to the base classes, bubbles can be created with a mixin. The mixin takes a diameter parameter with a default of 230px, the same at the large bubble.


```scss
@use 'openaq-design-system/mixins' as mixins;

@include mixins.bubble(300)
```
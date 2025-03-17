+++

title = "Buttons"

+++


There are 3 types of button available in the design system:

* __Primary__
* __Secondary__
* __Tertiary__

All buttons share the base `btn` class in addition to their specific sub-variant class, `btn-primary` `btn-secondary` `btn-tertiary`. e.g.:

`class="btn btn-primary"`

Buttons can style any block element, but when the semantic use case is a button, the `<button>` tag is preffered.

Each variant also supports a sub-variant to hadle text and an icon, which essentially changes the button from a `display:flex; justify-content:center;` to `display:flex; justify-content:space-between;`

<div
style="
display: grid;
grid-template-columns: repeat(7, 1fr);
row-gap: 10px;
"
>
<div></div>
<div>Primary</div>
<div>Primary + Icon</div>
<div>Secondary</div>
<div>Secondary + Icon</div>
<div>Tertiary</div>
<div>Tertiary + Icon</div>

<div>Active</div>
<div>
<button class="btn btn-primary">Primary</button>
</div>
<div>
<button class="icon-btn btn-primary">
    Primary
    <span class="material-symbols-outlined"> arrow_forward </span>
</button>
</div>
<div>
<button class="btn btn-secondary">Secondary</button>
</div>
<div>
<button class="icon-btn btn-secondary">
    Secondary
    <span class="material-symbols-outlined"> arrow_forward </span>
</button>
</div>
<div>
<button class="btn btn-tertiary">Tertiary</button>
</div>
<div>
<button class="btn btn-tertiary">
    Tertiary
    <span class="material-symbols-outlined"> arrow_forward </span>
</button>
</div>

<div>Disabled</div>
<div>
<button
    class="btn btn-primary btn-primary--disabled"
    disabled
>
    Primary
</button>
</div>
<div>
<button class="icon-btn btn-primary btn-primary--disabled">Primary <span class="material-symbols-outlined"> arrow_forward </span>
</button>
</div>
<div>
<button
    class="btn btn-secondary btn-secondary--disabled"
>
    Secondary
</button>
</div>
<div>
<button
class="btn btn-secondary btn-secondary--disabled"
>
Secondary
<span class="material-symbols-outlined"> arrow_forward </span>
</button>
</div>
<div>
<button
    class="btn btn-tertiary btn-tertiary--disabled"
>
    Tertiary
</button>
</div>
<div>
<button
class="icon-btn btn-tertiary btn-tertiary--disabled"
>
Tertiary
<span class="material-symbols-outlined"> arrow_forward </span>
</button>
</div>
</div>

```html
<button class="btn btn-primary">
    Primary
</button>

<button class="icon-btn btn-primary">
    Primary
    <span class="material-symbols-outlined"> arrow_forward </span>
</button>

<button class="btn btn-secondary">
    Secondary
</button>

<button class="icon-btn btn-secondary">
    Secondary
    <span class="material-symbols-outlined"> arrow_forward </span>
</button>

<button class="btn btn-tertiary">
    Tertiary
</button>

<button class="btn btn-tertiary">
    Tertiary
    <span class="material-symbols-outlined"> arrow_forward </span>
</button>

<button class="btn btn-primary btn-primary--disabled" disabled>
    Primary
</button>

<button class="icon-btn btn-primary btn-primary--disabled">
    Primary 
    <span class="material-symbols-outlined"> arrow_forward </span>
</button>

<button class="btn btn-secondary btn-secondary--disabled">
    Secondary
</button>

<button class="btn btn-secondary btn-secondary--disabled">
    Secondary
    <span class="material-symbols-outlined"> arrow_forward </span>
</button>

<button class="btn btn-tertiary btn-tertiary--disabled">
    Tertiary
</button>

<button class="icon-btn btn-tertiary btn-tertiary--disabled">
    Tertiary
    <span class="material-symbols-outlined"> arrow_forward </span>
</button>
```
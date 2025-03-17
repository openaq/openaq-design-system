+++

title = "Badges"

+++


<div
    style="
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 10px;
    margin: 15px 0;
    "
>
<div>
    <div class="badge badge--status-ok">Ok</div>
    <div class="badge badge--status-ok">Ok <span class="material-symbols-outlined text-white"> check </span></div>
    
</div>
<div>
    <div class="badge badge--status-alert">Alert</div>
    <div class="badge badge--status-alert">Alert <span class="material-symbols-outlined text-white"> info </span></div>
</div>
<div>
    <div class="badge badge--status-warning">Warning</div>
    <div class="badge badge--status-warning">Warning <span class="material-symbols-outlined text-white"> warning </span></div>
</div>
</div>

```html
<div class="badge badge--status-ok">
    Ok
</div>
<div class="badge badge--status-ok">
    Ok
    <span class="material-symbols-outlined text-white"> check </span>
</div>
<div class="badge badge--status-alert">
    Alert
</div>
<div class="badge badge--status-alert">
    Alert <span class="material-symbols-outlined text-white"> info </span>
</div>
<div class="badge badge--status-warning">
    Warning
</div>
<div class="badge badge--status-warning">
    Warning 
    <span class="material-symbols-outlined text-white"> warning </span>
</div>
```
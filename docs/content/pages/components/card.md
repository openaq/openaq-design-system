+++
title = "Cards"

+++


```html
<div class="card">
<div class="card__body">
    </div>
    </div>
```

<div style="display: grid;
grid-template-columns: repeat(2, 1fr);
column-gap: 20px;
row-gap: 20px;">
    <div class="card">
        <img src="https://via.placeholder.com/250" alt="" class="card__img">
        <div class="card__body">
            <h2 class="card-title">Card Title</h2>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus at vitae ab quia facilis quidem, necessitatibus earum aliquam harum ratione eum aperiam iste fugiat, tempora minima culpa? Incidunt, totam!</p>
        </div>
    </div>
    <div class="card">
        <img src="https://via.placeholder.com/250" alt="" class="card__img">
        <div class="card__body">
            <h2 class="card-title"">Card Title</h2>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus at vitae ab quia facilis quidem, necessitatibus earum aliquam harum ratione eum aperiam iste fugiat, tempora minima culpa? Incidunt, totam!</p>
        </div>
        <footer class="card__footer">
            <p>This is a footer</p>

        </footer>
    </div>
</div>
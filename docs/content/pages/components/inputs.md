+++

title = "Inputs"

+++



<div style="
width: 600px;
display: grid;
grid-template-columns: 1fr 3fr;
row-gap: 10px;">
<div>Checkbox</div>      
<div>   
<input class="checkbox" type="checkbox" name="demo-checkbox" id="demo-checkbox" checked/>
</div>
<div>Select</div>      
<div>   
<select name="demo-select" id="demo-select" class="select">
    <option value="pm25">PM2.5</option>
    <option value="pm25">PM10</option>
    <option value="pm25">O₃</option>
</select>
</div>
<div>Text input</div>   
<div>
<input 
type="text" 
placeholder="Type here"
pattern="[A-Za-z]{5,}" name="text-input" id="text-input" class="text-input">
</div>
<div>Text input (valid)</div>  
<div><input 
    type="text" 
    placeholder="Type here"
    name="text-input" id="text-input" class="text-input text-input--valid">
</div>
<div>Search input</div>  
<div><input 
    type="text" 
    placeholder="Search"
    name="search-input" id="search-input" class="search-input">
</div>
</div>

```html
<input class="checkbox" type="checkbox" name="demo-checkbox" id="demo-checkbox" checked/>
 
<select name="demo-select" id="demo-select" class="select">
    <option value="pm25">PM2.5</option>
    <option value="pm25">PM10</option>
    <option value="pm25">O₃</option>
</select>

<input 
type="text" 
placeholder="Type here"
pattern="[A-Za-z]{5,}" name="text-input" id="text-input" class="text-input">

<input 
    type="text" 
    placeholder="Type here"
    name="text-input" id="text-input" class="text-input text-input--valid">

<input 
    type="text" 
    placeholder="Search"
    name="search-input" id="search-input" class="search-input">

```
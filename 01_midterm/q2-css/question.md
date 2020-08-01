### Question 2: 

What do the following CSS selectors select? Please provide examples

    div + p
    div p
    div, p
    div > p
    div ~ p


### Your Answer:

div + p select all of the p elements directly following a div elements.  
example 
 <p></p>  - will not be selected
<div></div>  
<p></p>  - will be selected

div p selects ALL the elements inside the div elelment 
<p></p>  - will not be selected
<div> 
<p></p>  - will be selected
</div>

div, p selects all Div and P elements 
 <p></p>  - will be selected
<div></div> will be selected 
<p></p>  - will be selected

div > p selects the p tags in the first div
<div>  
<p></p>  - will be selected
<p></p>  - will be selected
</div>
<div>
<p></p>  - will not be selected
</div>

 div ~ p selects EVERY p elements that is prededed by a div element
 <p></p> not selected 
 <div>
 <p></p> selected
 <p></p>selected
 </div>
<div>
 <p></p>selected 
 <p></p>selected
 </div>


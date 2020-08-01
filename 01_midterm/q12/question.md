### Question 12:

Please use your own simple words to describe what are cascading rules in CSS. Please keep it under 150 words. Full credit given to simple explanation in own words and not a copy and paste from the documentation ;-)

### Answer:
The heiracrchy of specificity determines which CSS style is applied when an element has multiple conflicting styles applied. 
The inline style will override any other styles applied
Important styles are next in the heirarchy
Internal css 
ID styles are the next in heirarchy- they have an order of magnitude of importance above the next class. 
Classes, attrubute selectors, and psudo classes are next, and have an order of magnitude of importance above the next class
the least prioritized style is the element selector

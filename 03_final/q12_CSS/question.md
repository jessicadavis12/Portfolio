The following questions have equal weightage. The 2nd question has a choice. Each answer MUST be completed within 150 words:

1. Describe pseudo-elements and discuss what are they used for?


2. What does * { box-sizing: border-box; } do? What are its advantages?
or
2. What’s the difference between inline and inline-block?


3. What are the differences between a relative, fixed, absolute and statically positioned element?

4. What are the different ways to visually hide content (and make it available only for screen readers)?


###Answer:
1. pseudo-element is a keyword added to a selector that allows the programmer to style a specific 
part of the element selected.  
2. inline-block enables the programmer to adjust height, width, padding and margin of the element- an inline does not have this ability 
3.  static: default of page elements.  Useful to remove undesired positioning that is beyond the designers control
    relative: positioning that is dependent on the file itself. Limits the scope of absolutely positioned child elements.    This also introduces the Z- index - which could be problematic with statically positioned elements
    fixed: position element is positioned relative to the viewport, when the page is scrolled- the fixed position stays where is relative to viewing port. 
    absolute:very powerful positioning that allows the programmer to determine exactally where elements go . Flexibility is the trade off. 

Good answers - looks like #4 was not answered. More info https://webaim.org/techniques/css/invisiblecontent/

2.25/3 points
=======
### Feedback:

What about question 4?  Please research the topic of accessibility and this question within it as product developers are much more sensitive to accommodation these days.

Score 2.0 / 3.0

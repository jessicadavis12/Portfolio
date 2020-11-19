## Question A (40% credit):

In CSS3, how would you select:

  - Every `<a>` element whose `href` attribute value begins with “https”.
  - Every `<a>` element whose `href` attribute value ends with “.pdf”.
  - Every `<a>` element whose `href` attribute value contains the substring “css”.

## Question B (30% credit):

What is the purpose of the z-index and how is it used? What possible values does the z-index take (e.g. one of those is "auto")?

*a[href^="https"]
*a[href$=."pdf"]
*a[href*="css"]


Z-index determines the stack number of an element.  the element with greater the stack number will always be in front of the element with the lower stak number 

Z-index can be negative or positive integers 

Good - 3/3 points
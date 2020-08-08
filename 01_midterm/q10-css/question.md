1. List 2 techniques you may use to make your CSS more efficient (speedier to load)? (Please refer to strategies which DO NOT relate to speedy images loading in this question).

2. List 2 techniques you may use to make your pages more efficient (speedier to load) with respect to the images used on the page. 


### Your Answer:skip

FYI - 
There are many strategies. Here are a few ...
minify your CSS code

use id's over class'es and universal selectors as far as possible. Search stops if id is found, but entire dom is searched for a class, and dom searching is expensive.

make use of right to left reading of CSS as below ...

When we combine this right-to-left idea, and the key selector idea, we can see that this selector isn’t very efficient:

`#main-nav > li {   }  /* Slower than it might seem */`
Even though that feels weirdly counter-intuitive… Since ID’s are so efficient we would think the browser could just find that ID quickly and then find the li children quickly. But in reality, the relatively slow li tag selector is run first.

Don’t tag-qualify

ul#main-navigation { } /* never do this */

ID’s are unique, so they don’t need a tag name to go along with it. Doing so makes the selector less efficient.

Descendant selectors are the worst

The descendant selector is the most expensive selector in CSS. It is dreadfully expensive — especially if the selector is in the Tag or Universal Category.

In other words, a selector like this is an efficiency disaster:

html body ul li a { }

Inheritance

#main-navigation li a { font-family: Georgia, Serif; }

Font-family is inheritable, so you may not need a selector that is that specific to begin with (if all you are doing is changing the font). This may be just as effective, and far more efficient:

#main-navigation { font-family: Georgia, Serif; }

Reference: https://css-tricks.com/efficiently-rendering-css/

List 2 techniques you may use to make your pages more efficient (speedier to load) with respect to the images used on the page.
1. use smaller res images (72 dpi is enough)
1. use pre-clipped images, instead of CSS clipping (entire image is downloaded and a cropped portion is displayed via CSS)
1. use better compression formats, e.g. svg if supported by browser Use webp, that combines the best of jpg, png, gif image formats, is 30% smaller in size and is supported on almost 75% of the modern browsers.
1. use sprites if a carousel is involved.
1. use anticipatory pre-loading of images in the background, using JS
1. use srcset and sizes attributes as follows With responsive image tags, using the srcset and the sizes attributes of the img tag, you can provide the browser with a list of variants for a single image and a definition of the relative image size on different screens. The browser then decides the best image size to load on a particular device from the available list based on the device dimensions and the layout you specify.
1. lazy loading of images ... basically means that we defer loading of images that are not required immediately. Typically, any image that is not visible to the user on his screen or the viewport, can be loaded at a later point in time i.e. when the image enters or is about to enter the viewport.
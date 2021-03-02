# bootstrap-example
A project focused in using bootstrap for HTML, CSS and JS 

### Annotation
- ```no dot means HTML attributes or CSS property and values```
- ```.class selector```
- ```#id means id selector ```

## What I Learned
- How to use Bootstrap classes to auto style HTML tags
- ```.img-fuild``` (a Bootstrap class) will make image width responsive, always takes up 100% width
- ```.container``` + ```.row``` + ```.col``` (Bootstrap classes) makes a great flex grid, all from Bootstrap classes. Also makes a good structure for responsive mobile layout, but may need additional media queries to refine some smaller components
- A lot of Bootstrap classes are pre-styled, so I just need to apply them to HTML tags and i'll have all those styling. Any further styling can be added using user-named classes and overriding with ```!important``` if modifying a Bootstrap class
- Organizing Bootstrap classes vs personal stlying classes => Bootstrap classes first then personal classes last. Ex: ```class="container myTitle"```
- Tabs + list items in Bootstrap: ```list-group``` as a parent container handles ```list-group-item``` children in bordered vertical table, but you can switch to horizontal or add extra styling like ```list-group-item-primary``` which adds color and sizing to your list items. 
    - ```.tablist``` + ```.tab-content``` links the nav + the content pane together
    - ```data-bs-toggle="list"``` should be used in ```.list-group-item``` .Both ```#id``` and ```a tag href="#id"``` are needed to enable tab navigation
- Bootstrap tooltip is a fun way annotate info. Must install **popper.js** to have this function. But have to be initialized using Javascript. [Link](https://getbootstrap.com/docs/5.0/components/tooltips/)
    - only need these HTML attributes to start using it ```data-bs-toggle="tooltip"``` and ```title="put text here"```
- Modal: can be used via HTML attributes or Javascript
    - ```data-bs-toggle="modal"``` on a parent element will reference ```data-bs-target="#foo"``` or ```a href="#foo"```
    - ```data-bs-dismiss="modal"``` is used on a button to close a modal
- Toast - a notification Bootstrap component that's handy to use 
    - Must initialize through Javascript first -> target the div you wanna show, then use an ```addEventListener()``` method to target the button to fire Toast


## Some final thoughts
- Bootstrap builds excellent preset styles and functionalities to build a website fast. Really excels in styling, ease of set up. I got mine up and running in an afternoon, with front-end ready to go. 
- Strategies: setp up base frame with Bootstrap classes, like ```.col``` and `.row`, then tweak with SCSS styling
- Though there are Bootstrap classes [link](https://getbootstrap.com/docs/5.0/utilities/spacing/) that lets me adjust padding right from HTML file, I think it's best to leave the spacing + styling to CSS / SCSS files to handle. Using padding/margin Bootstrap classes may cause unintended side effects and difficult for maintenance in larger project.
- Some limitations 
    - I did have to wrestle with styling control for some of the pre-styled elements using ```!important```, which could be an issue for larger websites that manages hundreds of pages and elements styling. 
        - React.js with SASS or CSS Module could be better at handling the larger load, since they're modular and each components you create is reusable. There is a variation of Bootstrap built with Create React App, so i'm excited to try this out.
    - Really need to tight grip on Bootstrap classes to distinguish them from my own styling classes. BEM naming method _really helps_ with this problem. Also makes my class play nice with SCSS nested selectors.


## Tech stack used in this project
- HTML
- SCSS
- Bootstrap compiled CDN (CSS + JS **with Poppers.js** in bundle), linked in HTML link + script tags
- Font Awesome - icon library, linked in HTML


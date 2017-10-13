# Responsive Theme For Developers - Orchard CMS

## Installation
### Global Installation
1. Install node js from [here](https://nodejs.org/en/download)
2. Run `npm install npm@latest -g`
3. Run `npm install rimraf -g`

### Theme Installation
+ `npm install`

### Development
+ `npm start`

## Add a new SCSS library (or CSS library)
+ Install the library with npm (don't forget to add --save)
+ Import the library in this file: `scss/main.scss`
+ Run `npm start` and you are ready.

## Add a new JavaScript library
+ Install the library with npm (don't forget to add --save)
+ Add the library path to `tasks/task.concat.js` , in the `concatLib` task.
+ Run `npm start` and you are ready.

## Use fonts from a new library that you installed
+ Add the fonts path in the `tasks/task.fonts.js` , in the `libPaths.src.fonts` object
+ Run `npm start` and you are ready.

## Create a new JavaScript file
+ Create the file to `js/src` directory
+ Add the file path to `tasks/task.concat.js` , in the concatApp task, before `custom.js` directory.
+ Run `npm start` and you are ready.

## Minify images
+ Add your images to img/src directory.
+ Execute `gulp minify-img` .
+ Use your images from the img/dist directory.
  Example: `<img src="@Url.Content(Html.ThemePath(WorkContext.CurrentTheme, "/img/dist/hello-world.png"))" />` .

## Create favicons for multiple devices
+ Add your favicon in the img/src directory with the name logo.png (image size 1500x1500) .
+ Change the configuration in the `tasks/task.fonts.js` file.
+ Execute `gulp minify-img` .
+ Execute `gulp favicon` and you are ready.

## Features
+ Responsive zones with Bootstrap 3 Grid
+ Layout Part Grid System responsive with Bootstrap 3 Grid
+ Responsive Main Menu with burger button for mobile devices
+ Search form in main menu
+ Dropdown menu, with two levels
+ Favicons for multiple devices
+ Bootstrap pager
+ Responsive dynamic form elements
+ Share to social - Layout Snippet
+ Responsive iFrame - Layout Snippet
+ Authenticated User - Layout Snippet
+ Orchard Notification converted to Toastr messages
+ Responsive Image element
+ Image element can be an anchor if you place a URL in media caption
+ Responsive Login Form
+ Responsive Register Form
+ Login, logout buttons to footer
+ Accept Cookies message
+ Page loader with font-awesome icon
+ Disable button on form submit
+ Customized blogpost
+ Gulp for compiling SCSS, JavaScript compression, CSS Prefixing, Image minification etc.

## Orchard Gallery
+ [Description](http://gallery.orchardproject.net/Packages/ResponsiveThemeForDeveloper)
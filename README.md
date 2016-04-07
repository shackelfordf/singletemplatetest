# Single Page Template
The single page template was created in order to give developers a boiler plate with style and functionality preloaded and ready to go. 

## Local Development

### Download the Template
1. cd into where your keep your projects
2. Enter `svn export https://github.com/democrats/frontend-templates/trunk/single_page_template` into the terminal/console
3. Enter your github credentials and the folder should be downloaded to wherever you were cd'd into
4. Change the folder name and follow the instructions below to start developing with the template.

### Install Node.js and NPM
Follow the instructions detailed in in the [frontend-templates wiki](https://github.com/democrats/frontend-templates/wiki/Installing-NPM-%28Node.js-Package-Manager%29).

### Install Grunt into User Root
Open the console/terminal into your user root (`cd ~` for Mac users). Copy paste the following into your console/terminal:

```
npm install -g grunt-cli
```
This will allow you to run all of the necessary grunt tasks when you are developing with the template. 

### Install Grunt Modules into Project 
You will need install the grunt modules that handle all the tasks locally into your project. Just cd into your project folder and run the following commands in your terminal/console:

```
npm install grunt-contrib-uglify --save-dev
npm install grunt-sass --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-imagemin --save-dev
npm install grunt-newer --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-htmlmin --save-dev
```

### <a id="run-grunt"></a>Run Grunt

Once you have you have the template set up, open the terminal/console, cd into the local repo and enter `grunt`. This will run the automated tasks that convert and minify all of the necessary files for local development.

### Edit the HTML
Since the HTML is minifed into the root `index.html`, you will make your changes in `html/index.html`. 

### Edit the SCSS
Since this project uses SCSS, all of the brand colors and fonts have been added. All you need to do is add your customizations to the `_custom.scss` file located in `sass/imports`. If you ran grunt, changes you make here will get pulled into the style.min.css that displays on the site. If you don't see your changes, make sure you have grunt running by following the instructions in [run grunt](#run-grunt).

#### Colors and Fonts

The fonts for headings and body text have been set according the the DNC Brand Guide from design. The brand colors have been configured into variables for easy use:

* $brand_lt_blue
* $brand_dk_blue
* $brand_white
* $brand_red
* $brand_yellow
* $brand_gray

All you need to do is assign the colors to each selector in the `_custom.scss` sheet. 

### Edit/Add JS
Grunt is configured to concatenate and minify any file added to the `js` folder into the `theme_functions.min.js` file. You can choose to add your js to the `theme_functions.js` or delete it and add new files, as long as they go into the `js` folder. 

jQuery 2.1.0 is used for this project so code accordingly or change the version for your needs. Just make sure it's minified for pageload time sake. 

### Add Images
Images are set to be minified once they are added to the `images` folder. Once minified they will be in the `min_images` folder. Use the src `min_images/[YOUR IMAGE]` for images you plan to use in your site. 

## How Everything Works
Here's the nuts and bolts of how I have everything setup. If you want to make additions and edits, feel free to create a feature branch and make it work. 

### Grunt
Grunt automates turning the sass into css and minifying the css, as well as minifying the javascript. The gruntfile.js is set up to run the tasks with this specific file setup. If you need to change the setup, make sure to make the proper adjustments in the gruntfile.js. 

#### Tasks
* Minify
	* Minifies the css
* Sass
	* Converts the scss into css
* Uglify 
	* Minifies the js
* Imagemin
	* minifies your images
* Htmlmin
	* minifies your html
* Watch
	* watches for changes in either the SASS, JS, or HTML, then triggers the minify and uglify tasks. 
	* includes livereload, which will trigger your browser to refresh on changes to the js and/or css. 
		* **IMPORTANT:** if you see the error `Fatal error: Port 35729 is already in use by another process` when trying to run `grunt`, you will need to close out your other grunt processes that are currently running. 

### PureCSS
PureCSS provides the basic styling for buttons and grids that you can use on your microsite. 

#### Grids
For a grid, Just create a div with the class `pure-g` and next divs with classes of `pure-u-1 pure-u-md-*-*`. Then, create a div container within the grid with the class `grid-content` Example: 
```
<div class="pure-g">
	<div class="pure-u-1 pure-u-md-1-3">
		<div class="grid-conent">
			<p>Thirds</p>
		</div>
	</div>
	<div class="pure-u-1 pure-u-md-1-3">
		<div class="grid-conent">
			<p>Thirds</p>
		</div>
	</div>
	<div class="pure-u-1 pure-u-md-1-3">
		<div class="grid-conent">
			<p>Thirds</p>
		</div>
	</div>
</div>
```
In `class="pure-u-1 pure-u-md-1-3"`: 
 * pure-u is the grid item
 * md refers to the media query break point. md applies to ≥ 768px
 * 1-3 is the grid size ratio, which takes up one third or ~33% of the grid container
 * `pure-u-1` is the fallback from when the screen reaches the breakpoint. This grid will take 100% of the width of it's parent when the screen is smaller than 768px.

More info: [PureGrids](http://purecss.io/grids/)

#### Buttons
PureCSS also provides the basic styling for buttons. I have modified the buttons to have square borders and removed the shaddow effect. The customizations were made via a mixin so all you need to do is add the class `pure-button` to a div or link in order to apply the styles. The colors are can be edited by changing the definitions for `$theme_button_bg` and `$theme_button_txt`. Colors will inverse on hover by default.

### SCSS
* _vars.scss
	* All of the colors, fonts, and transitions are set here.
* _type.scss
	* The fonts are assigned to body and heading text here.
* _containers.scss
	* The parent level containers (header, main, footer) are positioned here.
* _mixins.scss 
	* all of the scss mixins are set here. Mixins are templated css styles that are included through the SCSS. 
* _custom.scss
	* This is where you will make your theme customizations. Make sure to use the brand colors and fonts from the _vars.scss to make a site the design team will like. 

### Social Links
Adapted from Nikki's script, the social links have been templated for simple use. All you need to do is edit the meta tags in the index.html ,include social share snippet, and define variables in social_links.js. 

#### Meta Tags for Social Share
The meta tags for both Twitter and Facebook have been added to the index.html, but you will need to fill in the `content` for the following properties:

* Facebook
	* og:url
	* og:title
	* og:description
	* og:image

* Twitter
	* twitter:title
    * twitter:description
    * twitter:image

Once you have pushed your microsite to production, run [Facebook's debugger](https://developers.facebook.com/tools/debug/) and check the [Twitter card validator](https://cards-dev.twitter.com/validator) with your production URL.

#### Social Share Snippet
```
<div class="social-share">
    <a href="" onclick="push(['Click', 'Facebook Share']);"  class="fb-link">
    	<i class="fa fa-facebook"></i>
    </a>
    <a href="" target="_blank" class="tweet-link">
        <i class="fa fa-twitter"></i>
    </a>
</div>
```
The output will give you two social media icons (facebook and twitter, respectively) that will open pop-ups with prefilled information based on the js and meta tags. 

#### Javascript (social_links.js)
This jQuery is designed to insert the href links with variables inserted into the URI. Below is an explanation of each variable:

* **text**: the text that will appear in only the tweet link. 
	* Make sure to double check the link to see if the tweet exceeds the 140 character limit
* **urlShare**: the URL of your microsite that will appear in both the tweet and facebook share links.
* **hashtags**: twitter share link only hashtags
* **fbImage**: the image that will appear in the facebook share link

### Form Template
Designed with PureCSS grids, the `form.html` snippet will allow users to fill in and submit their info all from the microsite. All you need to do is paste the BSD form URL in the `action` tag. 

**Note:** The first name and last name fields are configured for BSD forms specifically. If you have an ActBlue form, just change the first and last name input `name` tags to first_name and last_name, respectively. 

Sequential activation, a jQuery plugin

Sometimes you need to automatically set elements active, one after the other.

You can actiavte the plugin on as many elements on the page as you need, bar the processing limts of your viewer's computer, of course.

You can set the speed and how many times you want it to loop till indefinite.

If you only want the activation sequence to run once, you can opt to keep everyting active. This is nice for e.g. wait animations. An example:

How to use this plugin
1. Link the files you need

Include the jQuery script at the bottom of your page, e.g. through a CDN:

<script src="//code.jquery.com/jquery-2.1.3.min.js"></script>

Then include the minimized version of the script:

<script src="[path to your script]/jquery.sequential_activation.min.js"></script>

Change [path to your script] to where it resides, eg "js".
2. Create your HTML markup

This is very simple: create an element and style the element containing it. Like

<ul id="lights">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
<style>
  #lights {
    margin: 0;
    padding: 0;
    list-style: none;
    background: black;
  }
  #lights li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    ...
  }
</style>
			

3. Call the plugin

Then initialize the plugin, telling it in which element it needs to run:

<script>
  $(<containing element here, e.g. "#lights">).sequentialActivation({
    animationSpeed: 1000, 
    elementToActivate: 'li', 
    loop: 0, 
    keepActive: false 
  });

  // a second container:
  $(<containing element here, e.g. "nav">).sequentialActivation({
    animationSpeed: 1000, 
    elementToActivate: 'div', 
    loop: 3, 
    keepActive: false 
  });
</script>
	

4. Putting it all together

This is your basic page to get the plugin up and running:

<!DOCTYPE html>
<html>
  <head>
    ...
    <link rel="stylesheet" href="css/mysequential-activation.css">
  </head>
  <body>
  ...
    <ul id="lights">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    ...
    <script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="js/jquery.sequential_activation.min.js"></script>
    <script>
        $('#lights').sequentialActivation();	
    </script>
  </body>
</html>
			

Options

If you don't specify options, like in the example above, the plugin will use its default settings:
- animation speed: 300
- the element that needs to be activated: 'li'
- loop: 0, thus indefinte
- keep active: false. In the example of running

These are the options:

Speed
in the usual thousands of seconds
animationSpeed: 300

Elements that need to be activated
This lists the elements in the container that will be activated one by one:
elementToActivate: 'li'

Loop
You can specify the number of times it needs to loop. '0' means indefiniteL
loop: 0

Keep active
The elements will remain activated is set to 'true'. This means that looping needs to be set to '1', as otherwise the script continues unnecessarily.

keepActive: false

About
This jQuery plugin is part of my Playground - a collection of fun stuff I made in the past, from jQuery games and plugins to CSS animation tests.

Please drop in on the playground section of my portfolio site www.rayhyde.nl!

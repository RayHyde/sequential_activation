<h1>Sequential activation: activate elements one after the other</h1>
<p>Sometimes you need to automatically set elements active, one after the other, e.g. for creating running lights.</p>

<p>See it in action: <a href="http://rayhyde.github.io/sequential_activation/">http://rayhyde.github.io/sequential_activation/</a></p>

<h2>The Goodies</h2>
<p>You can activate the plugin on as many elements on the page as you need, bar the processing limits of your viewer's computer, of course.</p>
<p>You can set the speed and how many times you want it to loop till indefinite.</p>
<p>If you only want the activation sequence to run once, you can opt to keep everything active.</p>			
			
<h2>How to use this plugin</h2>
<h3>1. Link the files you need</h3>
<p>Include the jQuery script at the bottom of your page, e.g. through a CDN:</p>
<p><code>	&lt;script src="//code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;</code></p>
<p>Then include the minimized version of the script:</p>
<p><code>&lt;script src="[path to your script]/jquery.sequential_activation.min.js"&gt;&lt;/script&gt;</code></p>
<p>Change [path to your script] to where it resides, eg "js".</p>
<h3>2. Create your HTML markup</h3>
<p>This is very simple: create an element and style the element containing it. Like</p>
<pre>&lt;ul id="lights"&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
  &lt;li&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;style&gt;
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
&lt;/style&gt;
			</pre>
					<h3>3. Call the plugin</h3>
					<p>Then initialize the plugin, telling it in which element it needs to run:</p>
					<pre>
&lt;script&gt;
  $(&lt;containing element here, e.g. "#lights"&gt;).sequentialActivation({
    animationSpeed: 1000, 
    elementToActivate: 'li', 
    loop: 0, 
    keepActive: false 
  });

  // a second container:
  $(&lt;containing element here, e.g. "nav"&gt;).sequentialActivation({
    animationSpeed: 1000, 
    elementToActivate: 'div', 
    loop: 3, 
    keepActive: false 
  });
&lt;/script&gt;
	</pre>
		<h3>4. Putting it all together</h3>
		<p>This is your basic page to get the plugin up and running:</p>
		<pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    ...
    &lt;link rel="stylesheet" href="css/mysequential_activation.css"&gt;
  &lt;/head&gt;
  &lt;body&gt;
  ...
    &lt;ul id="lights"&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;&lt;/li&gt;
        &lt;li&gt;&lt;/li&gt;
    &lt;/ul&gt;
    ...
    &lt;script src="//code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;
    &lt;script src="js/jquery.sequential_activation.min.js"&gt;&lt;/script&gt;
    &lt;script&gt;
        $('#lights').sequentialActivation();	
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>
<h2>Options</h2>
<p>If you don't specify options, like in the example above, the plugin will use its default settings: <br>
- animation speed: 300 <br>
- the element that needs to be activated: 'li' <br>
- loop: 0, thus indefinite <br>
- keep active: false. In the example of running
</p>
<p>These are the options:</p>
<h3>Speed</h3>
<p>in the usual thousands of seconds</p>
<code>animationSpeed: 300</code>
<h3>Elements that need to be activated</h3>
<p>This lists the elements in the container that will be activated one by one:</p>
<code>elementToActivate: 'li'</code>
<h3>Loop</h3>
<p>You can specify the number of times it needs to loop. '0' means indefinite</p>
<code>loop: 0</code>
<h3>Keep active</h3>
<p>The elements will remain activated if set to 'true'. This means that looping needs to be set to '1', as otherwise the script continues unnecessarily.</p>
<p><code>keepActive: false</code></p>
<p><a href="downloads/sequential_activation.zip" class="btn btn-primary btn-lg download">Download from Github</a></p>

<h2>My Playground</h2>

<p>This project is part of my Playground - a collection of fun (and dare I say it: clever) stuff I made in the past, from jQuery games and plugins to CSS animation tricks.</p>

<p>Please drop in on my portfolio site <a href="http://www.rayhyde.nl">www.rayhyde.nl</a>!</p>

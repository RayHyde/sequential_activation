/* ----------------------------------------------------------------------
* File name:		jquery.sequential-activation.js
* Version:			1.0
* Description:	give elemenst a class "active" in a sequential loop
* Website:			generic jQuery plugin
* Version:			7-1-2016
* Author:				Ray Hyde - www.rayhyde.nl
---------------------------------------------------------------------- */

(function ($) {
	$.fn.sequentialActivation = function (options) {

		// default settings
		var settings = $.extend({
			animationSpeed: 300,
			elementToActivate: 'li',
			loop: 0,
			keepActive: false
		}, options);

		// prevent useless looping when the active state is 
		if ( settings.keepActive  == true && settings.loop == 0 ) {
			settings.loop = 1;
		}
		// some vars		
		var $el = this.find(settings.elementToActivate),
				qty = $el.length,
				i = 0,
				counter = 0;

		$(document).ready(function () {

			function activateIt() {
				if (settings.keepActive == false ) {
					$el.removeClass('active');
				}
				$el.eq(i).addClass('active');
				i++;
				if (i <= $el.length) {
					var timer = setTimeout(function () {
						activateIt(i);
					}, settings.animationSpeed);
				} else {
					if ( settings.loop == 0) {
						i = 0;
						activateIt(i);
					} else {
						if ( counter < settings.loop - 1 ) {							
							i = 0;
							counter++;
							activateIt(i);
						}
					}
				}
			}
			activateIt(i);

		});
	}
}(jQuery));
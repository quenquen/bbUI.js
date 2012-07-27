_bbPlayBook_activityIndicator = {
	apply: function(elements) {
		var i,
			outerElement,
			innerElement,
			indicator, 
			color = bb.screen.controlColor,
			size,
			width,
			swirl;

		if (elements.length > 0) {
			var canvas = document.createElement('canvas'),
				ctx,
				lingrad;
			// Create our color matched swirl
			canvas.setAttribute('height','184px');
			canvas.setAttribute('width', '184px');
			ctx = canvas.getContext('2d');
			ctx.beginPath();    
			ctx.moveTo(92,154);
			ctx.arcTo(154,154,154,92,62);
			ctx.arcTo(154,30,92,30,62);
			ctx.arcTo(81,30,81,20,10);
			ctx.arcTo(81,10,91,10,10);
			ctx.arcTo(173,10,173,92,82);
			ctx.arcTo(173,173,92,173,82);
			ctx.arcTo(81,173,81,164,10);
			ctx.arcTo(81,154,92,154,10);
			ctx.closePath();
			ctx.strokeStyle = 'transparent';
			ctx.stroke();
		 
			// Create our fill color
			var lingrad = ctx.createLinearGradient(0,50,0,154);
			lingrad.addColorStop(0, 'transparent');
			lingrad.addColorStop(1, '#92B43B');
			ctx.fillStyle = lingrad;
			ctx.fill();
			
			swirl = canvas.toDataURL();
		}
		
		for (i = 0; i < elements.length; i++)  {
			outerElement = elements[i];
			size = (outerElement.hasAttribute('data-bb-size')) ? outerElement.getAttribute('data-bb-size').toLowerCase() : 'medium';
			
			if (size == 'large') {
				width = '93px';
			} else if (size == 'small') {
				width = '21px';
			} else {
				size = 'medium';
				width = '46px';
			}
			
			outerElement.style.width = width;
			// Add another div so that the developers styling on the original div is left untouched
			indicator = document.createElement('div');
			indicator.setAttribute('class',  'bb-pb-activity-margin bb-pb-activity-'+size+' bb-activity-'+color);
			outerElement.appendChild(indicator);
			innerElement = document.createElement('div');
			innerElement.setAttribute('class','bb-pb-activity-'+size);
			innerElement.style['background-image'] = 'url("'+ swirl +'")';
			indicator.appendChild(innerElement);
			
			// Set our animation
			innerElement.style['-webkit-animation-name'] = 'activity-rotate';
			innerElement.style['-webkit-animation-duration'] = '0.8s';
			innerElement.style['-webkit-animation-iteration-count'] = 'infinite';
			innerElement.style['-webkit-animation-timing-function'] = 'linear';
		}
	}
}
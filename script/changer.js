Changer = function(category, name, quantity, time) {
	$.template("thumbnail-link", "images/categories/${Category}/thumb/${FileName}_thumb_${Number}.jpg");
	var shouldContinue;
	
	function animate(i) {
		setTimeout(function() {
			if(i<quantity && shouldContinue) {
				animate(i+1);
			} else {
				i = 0;
				animate(i+1);
			}
		}, time);
		
		$('img', category).attr("src", $.tmpl("thumbnail-link", [{Category: name, FileName: name, Number: i}]).text());
	}
	
	function mouseOver() {
		category.mouseover(function() {
		  shouldContinue = true;
		  animate(1, this);
		})
	}
	
	function mouseOut() {
		category.mouseout(function() {
		  shouldContinue = false;
		  $('img', this).attr('src', $.tmpl("thumbnail-link", [{Category: name, FileName: name, Number: 1}]).text());
		})
	}
	
	return {
		init: function() {
			mouseOver();
			mouseOut();
		}
	}
};

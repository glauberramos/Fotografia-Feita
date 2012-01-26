$(document).ready(function() {
  var changer = [];

  $('#footer-camera').mouseenter(function() {
    $('#dialog').show('slow');
    //$('#dialog').css('display','block');
  });

  $('#footer-camera').mouseleave(function() {
	//$('#dialog').css('display','none');
    $('#dialog').hide('slow');
  });
	
  $('#categories .photo-box.category div').each(function () {
    changer.push(new Changer($(this), $(this).attr('id'), $(this).attr('quantity'), 500));

    $(this).unbind().click(function () {
	  var result = $.ajax({
	    url: $(this).attr('id') + ".html",
	    context: document.body
	  });
	  setTimeout(function () {
		//TODO: refactor and think in a better way to do it, maybe hide and show
		$('#slides-box').hide();
		$('#category-box').show();
		$('#category-box').html(result.responseText);
		$('html, body').animate({scrollTop: 210}, "slow");
	  }, 200);
    });
  });

  $(changer).each(function() {
    this.init();	
  });

  $('#menu #menu-categories').click(function () {	
	$('#category-box').html('');
	$('#category-box').hide();
	$('html, body').scrollTop(0);
	$('#slides-box').show();
    $('html, body').animate({scrollTop: 630}, "slow");
  });
	
  $(function(){
    $("#slides").slides({
	  preload: true,
	  preloadImage: '/img/loading.gif',
	  play: 7000,
	  pause: 2500,
	  hoverPause: true
    });
  });
 
  $('#logo').unbind('click').click(function () {
	  window.location ='index.html';
  });

  var menuTop = 59;
  $(window).scroll(function() {
    if( $(this).scrollTop() > menuTop ) {
      $('#menu').show()
		.css('position', 'fixed')
		.css('top', 0)
		.css('padding-top', 0)
		.css('right', 171)
		.addClass('docked');
    }
    else {
      $('#menu')
		.css('position', 'relative')
		.css('right', 0)
		.css('padding-top', 40)
		.removeClass('docked');
    }
  });
});

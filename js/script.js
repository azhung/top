$(document).ready(function() {

	$('.btn-ask:first-child').addClass('active');
	$('.btn-ask').not(':first').addClass('not-active');

	$('.btn-ask').on('click', function(e) {
		e.preventDefault();
		var attr = $(this).attr('id');
		var main = $('#attend');

		$('.btn-ask').not(this).removeClass('active').addClass('not-active');
		$(this).addClass('active');		

		if (attr == 'condition') {
			$('#condition').html('<a href="#">Điều kiện tham gia</a>');
			$('#method').html('<a href="#">Cách thức tham gia như thế nào?</a>');
			main.find('.condition-content').css('display', 'block');
			main.find('.method-content').css('display', 'none');
		} else if(attr == 'method') {
			$('#condition').html('<a href="#">Điều kiện tham gia như thế nào?</a>');
			$('#method').html('<a href="#">Cách thức tham gia</a>');
			main.find('.condition-content').css('display', 'none');			
			main.find('.method-content').css('display', 'block');
		}

	});

	autoPlayYouTubeModal();

	//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
	function autoPlayYouTubeModal() {
	  var trigger = $("body").find('[data-toggle="modal"]');
	  trigger.click(function () {
	      var theModal = $(this).data("target"),
	          videoSRC = $(this).attr("data-theVideo"),
	          videoSRCauto = videoSRC + "?autoplay=1";
	      $(theModal + ' iframe').attr('src', videoSRCauto);
	      $(theModal + ' button.close').click(function () {
	          $(theModal + ' iframe').attr('src', videoSRC);
	      });
	  });
	}

	$('.clock-count').countdown('2016/01/31', function(event) {
	var $this = $(this).html(event.strftime(''	    
	     + '<span class="day">%D</span>'
	     + '<span class="hour">%H</span>'
	     + '<span class="minute">%M</span>'
	     + '<span class="second">%S</span>'));
	});

	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	if ( ($(window).height() + 100) < $(document).height() ) {
	    $('#top-link-block').removeClass('hidden').affix({
	        // how far to scroll down before link "slides" into view
	        offset: {top:100}
	    });
	}

});
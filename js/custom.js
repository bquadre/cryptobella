(function ($) {

  	"use strict";

    /*==== Loader ====*/   
    $('.preloader').fadeOut(1000); // set duration in brackets  


    /*==== Nav ====*/
    $('.navbar-collapse a').on('click',function(){
    	$(".navbar-collapse").collapse('hide');
    });

    
	/*==== Sticky ====*/
	$("#header").sticky({topSpacing:0});
	

    /*==== Counter ====*/
    $('.counter-item').appear(function() {
    	$('.counter-number').countTo();
    });
	
	/* Initialize Morphtext for rotating text in header */
	$("#js-rotating").Morphext({
		animation: "fadeIn",		
		separator: ",",
		speed: 3000,
		complete: function () {
		}
	});
	
    /*==== Owl Carousel ====*/
    var owl = $(".testimonialsList");
      owl.owlCarousel({
        autoPlay: 6000,
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        Speedfast: 200,
    });
	
	/*==== Clients ====*/
	var owl = $(".owl-clients");
      owl.owlCarousel({
		autoPlay: 6000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,3],
		itemsTablet: [768,3],
		itemsTabletSmall: false,
		itemsMobile : [479,2],
		Speedfast: 200,
    });	

    /*==== Smoothscroll ====*/    
	$('#home a, .custom-navbar a').on('click', function(event) {
		var $anchor = $(this);
		  $('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 49
		}, 1000);
		  event.preventDefault();
	});	
	
	/* ==== Revolution Slider ==== */
	if($('.tp-banner').length > 0){
		$('.tp-banner').show().revolution({
			delay:6000,
			startheight:750,
			startwidth: 1170,
			hideThumbs: 1000,
			navigationType: 'none',
			touchenabled: 'on',
			onHoverStop: 'on',
			navOffsetHorizontal: 0,
			navOffsetVertical: 0,
			dottedOverlay: 'none',
			fullWidth: 'on'
		});
	}
	
	  $('.error').hide();
	/* ==== Submit Contact Form ====*/
	$("#submit_btn").click(function() {
      // validate and process form here
	  $('.error').hide();
  	  var name = $("input#name").val();
  		if (name == "") {
        $("label#name_error").show();
        $("input#name").focus();
        return false;
      }
  		var email = $("input#email").val();
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
  		if (email == "") {
        $("label#email_error").show();
        $("input#email").focus();
        return false;
      } /*else if(!email.value.match(mailformat)){
		  //alert("You have entered an invalid email address!");  
         return false;   
	  }  */ 
  	  var phone = $("input#phone").val();
  		  
	  var subject = $("input#subject").val();
  		if (subject == "") {
        $("label#subject_error").show();
        $("input#subject").focus();
        return false;
      }
	  
	  var message = $("input#message").val();
  		if (message == "") {
        $("label#message_error").show();
        $("input#message").focus();
        return false;
      }
	   
	  var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&subject=' + subject + '&message=' + message;
	  //alert (dataString);
	  //return false;
	  
	 $.ajax({
    type: "POST",
    url: "message.php",
    data: dataString,
    success: function() {
         alert("Message sent successfully");    
    }
  });
  return false;
    });
		
})(jQuery);
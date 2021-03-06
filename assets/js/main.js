(function ($) {
	"use strict";

    jQuery(document).ready(function($){

		/*==============Init Wow JS==============*/
		new WOW().init();


		/*==============Scroll IT==============*/
		$.scrollIt({
		  upKey: 38,
		  downKey: 40,
		  easing: 'linear',
		  scrollTime: 1200,
		  activeClass: 'active',
		  onPageChange: null,
		  topOffset: 0
		});


		/*=============Header Animation==========*/
		function selise_control(){
			if ($('.navbar').offset().top > 200) {
            	$('.navbar-fixed-top').addClass('top-navigation-animate');
	        }
	        $(window).scroll(function () {
	            if ($('.navbar').offset().top > 200) {
	                $('.navbar-fixed-top').addClass('top-navigation-animate');
	            } else {
	                $('.navbar-fixed-top').removeClass('top-navigation-animate');
	            }
	        });
		}

		selise_control();

    });
}(jQuery));

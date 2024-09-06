$(function () {
  "use strict";

  // $(window).on("load", function () {
  //   var preloader = $('#preloader');

  //   // Hide preloader and fade in content after a delay
  //   setTimeout(function () {
  //     preloader.fadeOut(500)
  //   }, 0); // Change the delay value as per your requirement

  // });

  // $(".banner").slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 800,
  //   autoplaySpeed: 5000,
  //   slidesToShow: 1,
  //   fade: false,
  //   autoplay: false,
  //   slidesToScroll: 1,
  //   prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
  //   nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  // }).slickAnimation();



  // back to top js
  var btn = $("#button");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        1000
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });

  // // Animation on scroll
  // $(window).on("load", function () {
  //   setTimeout(() => {
  //     AOS.init({
  //       once: false,
  //     });
  //   }, 0);
  // });

  // // counter up js
  // $('.counter').counterUp({
  //   delay: 50,
  //   time: 2000
  // });


  // let elt = document.querySelectorAll('.why--choose--text--slider > *')

  // anime({
  //   targets: elt,
  //   translateX: '-100%',
  //   duration: 50000,
  //   easing: 'linear',
  //   loop: true
  // });

  // let elt1 = document.querySelectorAll('.pricing--plan--text--slider > *')

  // anime({
  //   targets: elt1,
  //   translateX: '-100%',
  //   duration: 50000,
  //   easing: 'linear',
  //   loop: true
  // });

  // select js
  $(".js-select2").select2({
    closeOnSelect: true
  });

  // dashboard sidebar js

  $(".control_sidebar_menu button").on("click", function () {
    $(".mobile_dashboard_sidebar").addClass("show_mobile_sidebar");
  });
  $(".close_dashboard_sidebar button").on("click", function () {
    $(".mobile_dashboard_sidebar").removeClass("show_mobile_sidebar");
  });

  
	// Mobile menu js start

	$(".mobile-topbar .bars i").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
		return false;
	});

	$(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
		$(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
	});

	$('.sub-mobile-menu ul').hide();
	$(".sub-mobile-menu a").on("click", function () {
		$(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
		$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
	});


  // // Get all the choose--list elements
  // const chooseListItems = document.querySelectorAll('.choose--list');

  // // Add event listeners for hover
  // chooseListItems.forEach(item => {
  //   item.addEventListener('mouseenter', () => {
  //     // Remove active class from all choose--list elements
  //     chooseListItems.forEach(listItem => {
  //       listItem.classList.remove('active--list');
  //     });
  //     // Add active class to the hovered element
  //     item.classList.add('active--list');
  //   });
  // });


});
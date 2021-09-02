
$(document).ready(function() {
	
	"use strict";
	
	PageLoad();
	FirstLoad();
	Portfolio();	
	Sliders();	
	Showcase();
	ShowcaseCarousel();
	LargeShowcaseCarousel();
	BackToTop();
	JustifiedGrid();
	Lightbox();
	PlayVideo();
	
	
});

/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

	function PageLoad() {	
		
		if ($('#page-content').hasClass("light-content")) {
			$('.preloader-wrap').addClass('light-content');			
		}
		
		$('body').removeClass('hidden');		
		
		var width = 100,
			perfData = window.performance.timing, 
			EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
			time = ((EstimatedTime/1000)%50) * 10
			
		// Loadbar Animation
		$(".loadbar").animate({
			width: width + "%"
		}, time / 0.8);	
		
		
		// Percentage Increment Animation
		var PercentageID = $("#precent"),
				start = 0,
				end = 100,
				durataion = time + 400;
				animateValue(PercentageID, start, end, durataion);
				
		function animateValue(id, start, end, duration) {
		  
			var range = end - start,
			  current = start,
			  increment = end > start? 1 : -1,
			  stepTime = Math.abs(Math.floor(duration / range)),
			  obj = $(id);
			
			var timer = setInterval(function() {
				current += increment;
				$(obj).text(current);
			  //obj.innerHTML = current;
				if (current == end) {
					clearInterval(timer);
				}
			}, stepTime);
		}
		
		// Fading Out Loadbar on Finised
		setTimeout(function(){
			$('.loadbar').append('<span class="hold-progress-bar"></span>');
			$('body').append('<audio loop autoplay volume="0" id="audio"><source src="https://b922bde52f23a8481830-83cb7d8d544f653b52d1a1621f05ea9d.ssl.cf3.rackcdn.com/audio/MASTERqwav.mp3" type="audio/mpeg" /></audio>');
			var audio = document.getElementById("audio");    
			audio.volume = 0.2;
			audio.play();
			TweenMax.to($('.hold-progress-bar'), 1, {force3D:true,width:'100%', delay:0.1, ease:Power2.easeOut, onComplete:function(){
				TweenMax.set($(".trackbar"), {visibility:'hidden', opacity:0});
				$('body').waitForImages({
						finished: function() {
							
							TweenMax.to($(".percentage"),0.5, {force3D:true, opacity:0, y:-90, delay:0, ease:Power1.easeInOut});
							TweenMax.to($(".headphones, .headphones-text"),0.3, {force3D:true, opacity:0, y:-50, delay:0.2, ease:Power2.easeOut});
							TweenMax.to($(".preloader-wrap"),0.7, {force3D:true, yPercent: -101, delay:0.6, ease:Power2.easeInOut});
							TweenMax.set($(".preloader-wrap"), {visibility:'hidden', delay:1.4, opacity:0});
							
							setTimeout(function(){
							
								$('body').waitForImages({
									finished: function() {
										TweenMax.to($("#header-container, #footer-container"), 1, {force3D:true, opacity:1, delay:0.3, ease:Power2.easeOut});
										$('body').removeClass('hidden-ball');		
									},
									waitForAll: true
								});
								
								if( $('.hero-video-wrapper').length > 0 ){
									$('#hero-bg-wrapper').find('video').each(function() {
										$(this).get(0).play();
									}); 
								}
								
								var navtitleheight = $(".hero-title").height()
								var navsubtitleheight = $(".hero-subtitle").height()
								
								TweenMax.to($("#main"), 0.2, {force3D:true, opacity:1, delay:0.1, ease:Power2.easeOut});
								if( $('#hero').hasClass("has-image")) {	
									TweenMax.to($("#hero-bg-image"), 1, {force3D:true, scale:1.05 , opacity:1, delay:0.2, ease:Power2.easeOut});
									TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: -navtitleheight, opacity:1, delay:0.9, ease:Power2.easeOut});
									TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y:navsubtitleheight, opacity:1, delay:0.95, ease:Power2.easeOut});
									TweenMax.to($(".scroll-down-wrap"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.85, ease:Power2.easeOut});
									TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:1.15, ease:Power2.easeOut});
								} else {
									TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: -navsubtitleheight, opacity:1, delay:0.9, ease:Power2.easeOut});
									TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y: navtitleheight, opacity:1, delay:0.95, ease:Power2.easeOut});
									TweenMax.to($(".post-article-wrap"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.7, ease:Power2.easeOut});
									TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:1.05, ease:Power2.easeOut});									
								}								
								
								if ($('#hero-bg-image').hasClass("light-content")) {
									$('#hero-caption').addClass('light-content');
									setTimeout(function(){
										$('#magic-cursor').addClass('light-content');
									} , 700 );			
									setTimeout(function(){
										$('#header-container').addClass('light-content');
									} , 600 );
								}
								
								// Fading In Showcase elements on Finised
								TweenMax.set($("#showcase-holder"), {opacity:0, scale:1.1});			
								TweenMax.set($(".swiper-pagination-bullet-active .subtitle"), {opacity:0, transform: 'translate3d(0,15vh,0)', delay:0});
								TweenMax.set($(".swiper-pagination-bullet-active .title"), {opacity:0, transform: 'translate3d(0,15vh,0)', delay:0});
								TweenMax.set($(".footer-button-wrap"), {opacity:0, transform: 'translate3d(0,15vh,0)', delay:0, ease:Power2.easeOut});
								TweenMax.set($(".showcase-counter, .swiper-pagination-bullet-active .counter, .arrows-wrap"), {opacity:0, delay:0,});
								
								TweenMax.to($("#showcase-holder"), 0.8, {force3D:true, opacity:1, scale:1, delay:0.8, ease:Power2.easeOut});
								TweenMax.to($(".swiper-pagination-bullet-active .subtitle"), 0.4, {force3D:true, opacity:1, y:0, delay:0.9, ease:Power2.easeOut});
								TweenMax.to($(".swiper-pagination-bullet-active .title"), 0.4, {force3D:true, opacity:1, y:0, delay:0.95, ease:Power2.easeOut});
								TweenMax.to($(".footer-button-wrap"), 0.4, {force3D:true, opacity:1, y:0, delay:1, ease:Power2.easeOut});
								TweenMax.to($(".showcase-counter, .swiper-pagination-bullet-active .counter, .arrows-wrap"), 0.3, {force3D:true, opacity:1, delay:0.95, ease:Power2.easeOut});
								
								// Fading In Small Carousel elements on Finised
								var tlCarousel = new TimelineLite();
								tlCarousel.set($("#showcase-carousel .swiper-slide"), {x: 300, opacity:0});
								$("#showcase-carousel .swiper-slide").each(function(index, element) {
									tlCarousel.to(element, 1.4, {x:0, opacity:1, delay:0.9, ease:Power3.easeOut}, index * 0.1)
								});
								// Fading In Large Carousel elements on Finised
								var tlCarousel = new TimelineLite();
								tlCarousel.set($("#large-showcase-carousel .swiper-slide"), {x: 300, opacity:0});
								$("#large-showcase-carousel .swiper-slide").each(function(index, element) {
									tlCarousel.to(element, 1.4, {x:0, opacity:1, delay:0.9, ease:Power3.easeOut}, index * 0.1)
								});
								TweenMax.set($(".swiper-scrollbar"), {scaleX: 0,});
								TweenMax.to($(".swiper-scrollbar"), 1.2, {force3D:true, scaleX: 1, delay:0.9, ease:Power2.easeOut});			
									
								setTimeout( function(){	
									$('body').removeClass("load-project-page");
								} , 600 );
								
								setTimeout( function(){	
									$('body').removeClass("load-next-project");
									$('body').addClass("header-visible");
									$('#showcase-holder').removeClass("disabled");
								} , 1600 );
								
								setTimeout( function(){	
									$('body').removeClass("show-loader")
								} , 800 );	
								
							} , 100 );
						},
					waitForAll: true
				});
				
			}});
	  
		}, time);
		
		
		
	}// End Page Load
		


/*--------------------------------------------------
Function First Load
---------------------------------------------------*/	

	function FirstLoad() {	
		
		
		if ($("body").hasClass("smooth-scroll")) {
			var elem = document.querySelector("#content-scroll");
			var scrollbar = Scrollbar.init(elem,
			{
				renderByPixels: true,
				damping:0.05
			});
		}
		
		$("html,body").animate({scrollTop: 0}, 1);
		
		if ($("#page-content").hasClass("light-content")) {
			$("main, nav").css('background-color', '#111');
			$('#magic-cursor').addClass('light-content');
			if( $('#hero').length > 0 ){						
				if( $('#hero').hasClass("has-image")) {	
					$("header").css('background-color', 'transparent');
				} else {
					$("header").css('background-color', 'transparent');
				}
			} else {
				$("header").css('background-color', 'transparent');
			}
		} else {
			$("main").css('background-color', '#fff');
			$("nav").css('background-color', '#0f1010');
			$('#magic-cursor').removeClass('light-content');
			if( $('#hero').length > 0 ){	
				if( $('#hero').hasClass("has-image")) {	
					$("header").css('background-color', 'transparent');
				} else {
					$("header").css('background-color', 'transparent');
				}
			} else {
				$("header").css('background-color', 'transparent');
			}
		}
		
		$('.section-image').each(function() {
			var image = $(this).data('src');	
			$(this).css({'background-image': 'url(' + image + ')'});
		});
		
		$('.item').each(function() {
			var image = $(this).find('.item-image').data('src');	
			$(this).find('.item-image').css({'background-image': 'url(' + image + ')'});
		});
		
		$('.thumb-page').each(function() {
			var image = $(this).data('src');	
			$(this).css({'background-image': 'url(' + image + ')'});
		});
		
		$('.video-cover').each(function() {
			var image = $(this).data('src');	
			$(this).css({'background-image': 'url(' + image + ')'});
		});
		
		//Load Default Page
		$('a.ajax-link').on('click', function() {
			$("body").addClass("show-loader");	
			$(".flexnav").removeClass("flexnav-show");
			$('#menu-burger').removeClass("open");
			var tlMenu = new TimelineLite();
			$(".fullscreen-menu .menu-timeline").each(function(index, element) {
				tlMenu.to(element, 0.25, {y:-30, opacity:0, ease:Power2.easeIn}, index * 0.03)
			});	
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
			if( $('#showcase-holder').length > 0 ){
				TweenMax.to($(".swiper-pagination-bullet-active .subtitle"), 0.4, {force3D:true, opacity:0, delay:0.1, ease:Power2.easeOut});
				TweenMax.to($(".swiper-pagination-bullet-active .title"), 0.4, {force3D:true, opacity:0, delay:0.1, ease:Power2.easeOut});
				TweenMax.to($(".footer-button-wrap"), 0.4, {force3D:true, opacity:0, delay:0.1, ease:Power2.easeOut});
				TweenMax.to($(".showcase-counter, .swiper-pagination-bullet-active .counter, .arrows-wrap"), 0.3, {force3D:true, opacity:0, delay:0.1, ease:Power2.easeOut});
				TweenMax.to($("#main"), 0.3, {opacity:0, delay:0.4, ease:Power0.ease});
			} else {
				TweenMax.to($("#main"), 0.3, {opacity:0, delay:0.1, ease:Power0.ease});
			}		
			TweenMax.to($("#footer-container"), 0.3, {opacity:0, ease:Power0.ease});
			TweenMax.to($("#showcase-carousel .swiper-slide-active"), 0.4, {force3D:true, x:-250, opacity:0, delay:0.05, ease:Power3.easeIn  });
			TweenMax.to($("#showcase-carousel .swiper-slide-active").next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.1, ease:Power3.easeIn  });
			TweenMax.to($("#showcase-carousel .swiper-slide-active").next().next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.15, ease:Power3.easeIn  });
			TweenMax.to($("#showcase-carousel"), 0.5, {force3D:true, opacity:0, delay:0.1, ease:Power1.easeInOut  });
			
			TweenMax.to($("#large-showcase-carousel .swiper-slide-active").prev(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.05, ease:Power3.easeIn  });
			TweenMax.to($("#large-showcase-carousel .swiper-slide-active"), 0.4, {force3D:true, x:-250, opacity:0, delay:0.1, ease:Power3.easeIn  });
			TweenMax.to($("#large-showcase-carousel .swiper-slide-active").next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.15, ease:Power3.easeIn  });
			TweenMax.to($("#large-showcase-carousel"), 0.5, {force3D:true, opacity:0, delay:0.1, ease:Power1.easeInOut  });		
		});
		
		
		//Load Page From Menu
		$('nav .ajax-link').on('click', function() {
			var tl = new TimelineLite();
			$(".menu-timeline").each(function(index, element) {
				tl.to(element, 0.25, {y:-80, opacity:0, ease:Power1.easeIn }, index * 0.05)
			});
		});
		
		$('#burger-wrapper').on('click', function() {
			$('#menu-burger, nav').toggleClass('open');			
			setTimeout( function(){			
				if ($('#menu-burger').hasClass("open")) {
					$('header').addClass('over-sidebar');
					if (!$('#page-content').hasClass("light-content")) {	
						$('#magic-cursor').addClass('light-content');
						$('#header-container').addClass('light-content');
					}
					//Fade In Navigation Lists
					var tlMenu = new TimelineLite();
					tlMenu.set($(".menu-timeline"), {y: 80, opacity:0});
					$(".menu-timeline").each(function(index, element) {
						tlMenu.to(element, 0.5, {y:0, opacity:1, delay:0.4, ease:Power2.easeOut}, index * 0.1)
					});
						
				} else {	
					//Fade Out Navigation Lists					
					var tlMenu = new TimelineLite();
					$(".menu-timeline").each(function(index, element) {
						tlMenu.to(element, 0.25, {y:-80, opacity:0, ease:Power2.easeIn}, index * 0.05)
					});
					if (!$('#page-content').hasClass("light-content")) {	
						setTimeout( function(){
							$('#magic-cursor').removeClass('light-content');
							$('#header-container').removeClass('light-content');
						} , 500 );
					}
					setTimeout( function(){
						$(".touch-button.active").trigger("click");
						$('header').removeClass('over-sidebar');
					} , 500 );
				}							
			} , 20 );
		});
		
		
		$(".button-wrap.left").on('click', function() {
			var audio = document.getElementById("audio");
			$('body').toggleClass("mute");
			$(this).toggleClass("disabled");			   
			if ($(this).hasClass('disabled')) {
				$('.button-text span').text($('.button-text span').data('off'));
				$('.button-text span').attr("data-off", $('.button-text span').data('on'));
				$('.button-text span').attr("data-on", $('.button-text span').text());
				audio.volume = 0;
				audio.pause();
			} else {
				$('.button-text span').text($('.button-text span').data('on'));
				$('.button-text span').attr("data-on", $('.button-text span').data('on'));
				$('.button-text span').attr("data-off", $('.button-text span').data('off'));
				audio.volume = 0.2;
				audio.play();
			}
		});		
		
		
		// Page  Navigation Events
		$('.next-ajax-link-page').on('click', function() {					
			$("body").addClass("load-next-page");
			$("body").addClass("show-loader");
			var pageheight = $(".scroll-content").height()
			if ($("body").hasClass("smooth-scroll")) {
				TweenMax.to(scrollbar, 0.5, {scrollTop :pageheight, ease:Power4.easeIn});
			} else {                    
                TweenMax.to(window, 0.5, {scrollTo :$("footer").offset().top, ease:Power4.easeIn});               
            }	
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
			if ($('#project-nav').hasClass("light-content")) {				
				setTimeout(function(){
					$('body').addClass('light-content');								
				} , 300 );
			}
			if ($("body").hasClass("smooth-scroll")) {
				if ($(window).width() >= 1466) {
				   var navmove = $("#content-scroll").height() - $("#hero").height() - 92 - $("footer").height()
				}
				else {
				   var navmove = $("#content-scroll").height() - $("#hero").height() - 72 - $("footer").height()
				}				
			} else {
				if ($(window).width() >= 1466) {
				   var navmove = window.innerHeight - $("#hero").height() - 92 - $("footer").height()
				}
				else {
				   var navmove = window.innerHeight - $("#hero").height() - 72 - $("footer").height()
				}				   
			}
			var navtitleheight = $(".page-title").height()
			var navsubtitlemove = $(".page-subtitle").height() + navtitleheight
			var navsubtitleheight = $(".page-subtitle").height()
				
			TweenMax.to($(".next-page-title"), 0.6, {force3D:true, yPercent:-10,delay:0, ease:Power2.easeInOut});
			if ($('.next-page-title .inner').hasClass("text-align-center")) {
				TweenMax.to($(".page-subtitle"), 0.3, {force3D:true, opacity:0, scale:0.5, delay:0, ease:Power2.easeOut});
			} else {
				TweenMax.to($(".page-subtitle"), 0.3, {force3D:true, opacity:0, scale:1, delay:0, ease:Power2.easeOut});
			}
			TweenMax.to($(".page-title"), 0.6, {force3D:true, y: -navtitleheight, delay:0.1, ease:Power2.easeInOut});
			TweenMax.set($(".page-subtitle"), {opacity:0, scale:1, y: navsubtitlemove, delay:0.4});
			TweenMax.set($(".subtitle-info"), {opacity:0, delay:0.4});
			TweenMax.set($(".subtitle-name"), {opacity:1, delay:0.4});
			TweenMax.to($(".page-subtitle"), 0.3, {force3D:true, opacity:1, scale:1, y:navsubtitleheight, delay:0.4, ease:Power2.easeOut});
			TweenMax.to($("#main-page-content, #hero"), 0.3, {opacity:0});		
			TweenMax.to($("#page-nav"), 0.6, {y: - navmove, ease:Power2.easeInOut});
			TweenMax.to($("footer"), 0.3, {opacity:0, delay:0.2, ease:Power2.easeInOut});
		});
		
		
		// Project Navigation Events
		$('.next-ajax-link-project').on('click', function() {					
			$("body").addClass("load-next-project");
			$("body").addClass("show-loader");
			var pageheight = $(".scroll-content").height()
			if ($("body").hasClass("smooth-scroll")) {
				TweenMax.to(scrollbar, 0.5, {scrollTop :pageheight, ease:Power4.easeIn});
			} else {                    
                TweenMax.to(window, 0.5, {scrollTo :$("footer").offset().top, ease:Power4.easeIn});               
            }		
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
			if ($('#project-nav').hasClass("light-content")) {				
				setTimeout(function(){
					$('body').addClass('light-content');								
				} , 300 );
			}	
			var navtitleheight = $(".hero-title").height()
			var navsubtitleheight = $(".hero-subtitle").height()
			TweenMax.to($(".next-project-title"), 0.6, {force3D:true, yPercent:-10,delay:0, ease:Power2.easeInOut});
			TweenMax.to($(".main-subtitle"), 0.3, {force3D:true, opacity:0, scale:0.5, delay:0, ease:Power2.easeOut});
			TweenMax.to($(".main-title"), 0.6, {force3D:true, y:-navtitleheight, delay:0.1, ease:Power2.easeInOut});
			TweenMax.set($(".main-subtitle"), {opacity:0, scale:1, y: 150, delay:0.4});
			TweenMax.set($(".subtitle-info"), {opacity:0, delay:0.4});
			TweenMax.set($(".subtitle-name"), {opacity:1, delay:0.4});
			TweenMax.to($(".main-subtitle"), 0.3, {force3D:true, opacity:1, scale:1, y:navsubtitleheight, delay:0.4, ease:Power2.easeOut});
			TweenMax.to($("#main-page-content"), 0.3, {opacity:0});			
			setTimeout(function(){
				TweenMax.to($("#project-nav"), 0.6, {height:"100vh", ease:Power2.easeInOut});
				TweenMax.to($(".next-project-image"), 0.6, {top:"0", y: 0, ease:Power2.easeInOut});
				TweenMax.to($("footer"), 0.3, {opacity:0, ease:Power2.easeInOut});
			} , 50 );	
		});
		
		
		if( $('#project-nav').length > 0 ){
			$('#main-page-content').addClass('project-page');			
		}
		
		if( $('#portfolio').length > 0 ){
			$('#main-page-content').addClass('portfolio-page');			
		}
			
		// Slider Center on click
		$('.slider').on('click', function() {
			var $window = $(window),
				$element = $(this),
				elementTop = $element.offset().top,
				elementHeight = $element.height(),
				viewportHeight = $window.height(),
				scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);
			if ($("body").hasClass("smooth-scroll")) {				
				var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height/2);				
				TweenLite.to(scrollbar, 0.8, {scrollTo:scrollOffset + elementHeight/2, ease:Power4.easeInOut});				
			}
			else{				
				$("html, body").animate({ scrollTop: scrollIt }, 350);                
			}				
		});
		
		// Carousel Center on click
		$('.carousel').on('click', function() {				
			var $window = $(window),
				$element = $(this),
				elementTop = $element.offset().top,
				elementHeight = $element.height(),
				viewportHeight = $window.height(),
				scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);	
			if ($("body").hasClass("smooth-scroll")) {					
				var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height/2);                    
				TweenLite.to(scrollbar, 0.8, {scrollTo:scrollOffset + elementHeight/2, ease:Power4.easeInOut});                    
			}
			else{                    
				$("html, body").animate({ scrollTop: scrollIt }, 350);                
			}				
		});
		
		
		// Video Center on click
		$('.video-wrapper').on('click', function() {				
			var $window = $(window),
				$element = $(this),
				elementTop = $element.offset().top,
				elementHeight = $element.height(),
				viewportHeight = $window.height(),
					scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);
			if ($("body").hasClass("smooth-scroll")) {					
				var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height/2);                    
				TweenLite.to(scrollbar, 0.8, {scrollTo:scrollOffset + elementHeight/2, ease:Power4.easeInOut});                    
			}
			else{                    
				$("html, body").animate({ scrollTop: scrollIt }, 350);                
			}
			
			var audio = document.getElementById("audio");
			$('body').toggleClass("mute");
			$(".icon-wrap").toggleClass("disabled");			   
			if ($(".icon-wrap").hasClass('disabled')) {
				$('.button-text span').text($('.button-text span').data('off'));
				$('.button-text span').attr("data-off", $('.button-text span').data('on'));
				$('.button-text span').attr("data-on", $('.button-text span').text());
				audio.volume = 0;
				audio.pause();
			} else {
				$('.button-text span').text($('.button-text span').data('on'));
				$('.button-text span').attr("data-on", $('.button-text span').data('on'));
				$('.button-text span').attr("data-off", $('.button-text span').data('off'));
				audio.volume = 0.2;
				audio.play();
			}			
							
		});
		
		var viewportWidth = $(window).width();
		if (viewportWidth < 1024) {				
			$('.hero-video-wrapper').remove();							 
		}
		
		
		// Tilt Showcase Wrapper
		if( $('#hero').hasClass("has-image")) {				
			var timeout;
			$(window).resize(changePersective);				
			changePersective();				
			function changePersective(){
				TweenMax.set('#hero-bg-wrapper', {perspective: $('body').width()});
			}
			$('#hero').mousemove(function(e){
				if(timeout) clearTimeout(timeout);
				setTimeout(callParallaxHero.bind(null, e));			
			});				
			function callParallaxHero(e){
				parallaxItHero(e, '#hero-bg-image', 0); //5
				moveItHero(e, '#hero-bg-image', - 30); //80
			}				
			function parallaxItHero(e, target, movement){
				var $this = $('#hero-bg-wrapper');
				var relX = e.pageX - $this.offset().left;
				var relY = e.pageY - $this.offset().top;					
				TweenMax.to(target, 1, {
					rotationY: (relX - $this.width()/1.5) / $this.width() * movement,
					rotationX: (relY - $this.height()/2) / $this.height() * movement,
				})
			}				
			function moveItHero(e, target, movement){
				var $this = $('#hero-bg-wrapper');
				var relX = e.pageX - $this.offset().left;
				var relY = e.pageY - $this.offset().top;					
				TweenMax.to(target, 1, {
					x: (relX - $this.width()/2) / $this.width() * movement,
					y: (relY - $this.height()/2) / $this.height() * movement,
				})
			}
		}
		
		var heroparallax = TweenMax.to('#hero-image-parallax', 1, {top:"20%", ease:Linear.easeNone});
		var captionParallax = TweenMax.to('.has-image #hero-caption', 0.5, {top:"25%", ease:Linear.easeNone});
		
		var controller = new ScrollMagic.Controller();
		
		var heroScene = new ScrollMagic.Scene({
			triggerElement: '#hero',
			triggerHook: 0,
			duration:'100%'
		})
		.setTween(heroparallax)
		.addTo(controller);
		  
		var captionScene = new ScrollMagic.Scene({
			triggerElement: '#hero',
			triggerHook: 0,
			duration:'100%'
		})
		.setTween(captionParallax)
		.addTo(controller);
		
		if ($("body").hasClass("smooth-scroll")) {
			scrollbar.addListener(() => {
				heroScene.refresh()
				captionScene.refresh()
			});
		}
		
		// 	parallax image 
		$(".has-parallax").each( function () {
			var $this = $(this);
			var $thisHeight = $(this).height();
			var bg = $this.find("img");
			
			// Add tweenmax for backgroundParallax
			var parallax = TweenMax.fromTo( bg, 1, {y: '-20%'}, {y: '10%',ease:Linear.easeNone});
			
			// Create scrollmagic scene
			var parallaxScene = new ScrollMagic.Scene({
				triggerElement: this, // <-- Use this to select current element
				triggerHook: 1,
				duration:'300%'
			})
			.setTween(parallax)
			.addTo(controller);
			
			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					parallaxScene.refresh()
				});
			}
			
		});
		
		// animate each
		$('.has-animation').each(function(){
			var $this = $(this);
			var $thisHeight = $(this).height();
			
			var scene = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeight})
				.addTo(controller);
			
			scene.triggerHook(1)
			
			scene.on('enter', function(){
				$this.delay($this.attr('data-delay')).queue(function(next){
					TweenMax.to($this, 0.6, {force3D:true, opacity:1, y:0, scale:1, delay:0.1, ease:Power2.easeOut});
					next();
				});
			});
			
			scene.on('leave', function(event){
				$this.removeClass('active');
			});
			
			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					scene.refresh()
				});
			}
		})
		
		$('.has-mask').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		});
		
		$('.has-mask span').each(function(){
			var words = $(this).text().split(" ");
			var total = words.length;
			$(this).empty();
			for (index = 0; index < total; index ++){
				$(this).append($("<span /> ").text(words[index]));
			}
		});
		
		$('.has-mask').each(function(){
			var $this = $(this);
			var $thisHeight = $(this).height();
			
			var scene = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeight})
				.addTo(controller);
			
			scene.triggerHook(1)
			
			scene.on('enter', function(){				
				
				var tl = new TimelineLite();
						
				$this.find('span > span').each(function(index, element) {
					tl.to(element, 0.6, {y:0, opacity:1, delay:0.1, ease:Power2.easeOut}, index * 0.03)
				});
				
			});
			
			scene.on('leave', function(event){
				$this.removeClass('active');
			});
			
			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					scene.refresh()
				});
			}
		})
		
		$('.item-appear').each(function(){
			var $this = $(this);
			var $thisHeight = $(this).height();
			
			var scene = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeight})
				.addTo(controller);
			
			scene.triggerHook(1)
			
			scene.on('enter', function(){				
				$this.addClass('active');
			});
			
			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					scene.refresh()
				});
			}
		})
		
		
	}// End First Load
	
	
/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {	
		
		if ($("body").hasClass("smooth-scroll")) {
			var elem = document.querySelector("#content-scroll");
			var scrollbar = Scrollbar.init(elem,
			{
				renderByPixels: true,
				damping:0.05
			});
		}
		
		$('body').waitForImages({
			finished: function() {
				$('body').removeClass('loading')
				setTimeout( function(){	
					$('body').removeClass('hidden').removeClass('scale-up').removeClass('scale-none');
				} , 1500 );
			},
			waitForAll: true
		});	
		
		$('body').waitForImages({
			finished: function() {
				TweenMax.to($("#header-container"), 1, {force3D:true, opacity:1, ease:Power2.easeOut});				
			},
			waitForAll: true
		});
		
		TweenMax.to($("#main"), 0.2, {force3D:true, opacity:1, delay:0.1, ease:Power2.easeOut});
				
		var navtitleheight = $(".hero-title").height()
		var navsubtitleheight = $(".hero-subtitle").height()
		
		if( $('#hero').hasClass("has-image")) {	
			if( $('body').hasClass("load-project-thumb")) {
				TweenMax.to($("#hero-bg-image"), 0, {force3D:true, scale:1.05 , opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-title"), 0.4, {force3D:true, y:-navtitleheight, opacity:1, delay:0.5, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y:navsubtitleheight, opacity:1, delay:0.6, ease:Power2.easeOut});
			} else {
				TweenMax.to($("#hero-bg-image"), 0, {force3D:true, scale:1.05 , opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-title"), 0, {force3D:true, y:-navtitleheight, opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle"), 0, {force3D:true, y:navsubtitleheight, opacity:1, delay:0, ease:Power2.easeOut});
			}
			TweenMax.to($(".scroll-down-wrap"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.85, ease:Power2.easeOut});
			TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:0.95, ease:Power2.easeOut});
		} else {
			TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: -navsubtitleheight, opacity:1, delay:0.1, ease:Power2.easeOut});
			TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y: navtitleheight, opacity:1, delay:0.15, ease:Power2.easeOut});
			TweenMax.to($(".post-article-wrap"), 0.4, {force3D:true, y: 0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:0.15, ease:Power2.easeOut});			
		}		
		
		if ($('#hero-bg-image').hasClass("light-content")) {
			$('#hero-caption').addClass('light-content');
			setTimeout(function(){
				$('#magic-cursor').addClass('light-content');
			} , 700 );			
			setTimeout(function(){
				$('#header-container').addClass('light-content');
			} , 600 );
		}
		
		// Fading In Small Carousel elements on Finised
		var tlCarousel = new TimelineLite();
		tlCarousel.set($("#showcase-carousel .swiper-slide"), {x: 300, opacity:0});
		$("#showcase-carousel .swiper-slide").each(function(index, element) {
			tlCarousel.to(element, 1.4, {x:0, opacity:1, delay:0.7, ease:Power3.easeOut}, index * 0.1)
		});
		// Fading In Large Carousel elements on Finised
		var tlCarousel = new TimelineLite();
		tlCarousel.set($("#large-showcase-carousel .swiper-slide"), {x: 300, opacity:0});
		$("#large-showcase-carousel .swiper-slide").each(function(index, element) {
			tlCarousel.to(element, 1.4, {x:0, opacity:1, delay:0.7, ease:Power3.easeOut}, index * 0.1)
		});
		TweenMax.set($(".swiper-scrollbar"), {scaleX: 0,});
		TweenMax.to($(".swiper-scrollbar"), 1.2, {force3D:true, scaleX: 1, delay:0.7, ease:Power2.easeOut});
		
		TweenMax.to($("#footer-container"), 1, {force3D:true, opacity:1, delay:0.4, ease:Power2.easeOut});		
		
		if( $('.load-project-thumb').length > 0 ){
			setTimeout( function(){
				$('#hero-bg-wrapper').find('video').each(function() {
					$(this).get(0).play();
				});
				$('.thumb-container').remove();
				if( $('#project-nav').length > 0 ){
					TweenMax.to(scrollbar, 1.5, {scrollTo:180, delay:0.6, ease:Power4.easeInOut});
				}
			} , 200 );
		} else {
			$('#hero-bg-wrapper').find('video').each(function() {
				$(this).get(0).play();
			});
			if( $('#project-nav').length > 0 ){
				if ($("body").hasClass("smooth-scroll")) {
					TweenMax.to(scrollbar, 1.5, {scrollTo:180, delay:0.3, ease:Power4.easeInOut});
				} else {                    
					TweenMax.to(window, 1.5, {scrollTo:180, delay:0.3, ease:Power4.easeInOut});           
				}				
			}
		}
		
		setTimeout( function(){	
			$('body').removeClass("load-project-thumb").removeClass("load-project-page").removeClass("load-next-project").removeClass("show-loader").removeClass("load-next-page");
		} , 800 );
		
		setTimeout( function(){				
			$('#showcase-holder').removeClass("disabled");
		} , 1900 );
		
	
		if ($('body').hasClass('mute')) {
			$(".icon-wrap").addClass("disabled");
			$('.button-text span').text($('.button-text span').data('off'));
			$('.button-text span').attr("data-off", $('.button-text span').data('on'));
			$('.button-text span').attr("data-on", $('.button-text span').text());
		} else {
			$('.button-text span').text($('.button-text span').data('on'));
			$('.button-text span').attr("data-on", $('.button-text span').data('on'));
			$('.button-text span').attr("data-off", $('.button-text span').data('off'));
		}
		
	
	}// End Lazy Load		



/*--------------------------------------------------
Function Portfolio
---------------------------------------------------*/	
		
	function Portfolio() {	
			
		if( $('#portfolio-wrap').length > 0 ){			
			
			if ($("body").hasClass("smooth-scroll")) {
				var elem = document.querySelector("#content-scroll");
				var scrollbar = Scrollbar.init(elem,
				{
					renderByPixels: true,
					damping:0.05
				});
			}
			
			var $container = $('#portfolio').packery({
				itemSelector: '.item',
				gutter:0,				
				transitionDuration: "0.5s"
			});
			
			$('#filters a').on('click', function() {
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				$('.item').addClass('item-margins');
				var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector }, function( $changedItems, instance ) {
				  instance.$allAtoms.filter('.isotope-hidden').removeClass('is-filtered');
				  instance.$filteredAtoms.addClass('is-filtered');
				});		
				return false;
			});
			
			$("#all").trigger('click');
				
			$('.item').each(function() {
				var image = $(this).find('.item-image').data('src');	
				$(this).find('.item-image').css({'background-image': 'url(' + image + ')'});
			});
			
			
			$(".item-image").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 1.8});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
				$(this).find('video').each(function() {
					$(this).get(0).play();
				});
			});
			
			$('.item-image').on('mousedown', function(event) {
				return false;
			});
				
			$(".item-image").mouseleave(function(e) {
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
				$(this).find('video').each(function() {
					$(this).get(0).pause();
				});
			});
			
			$("#main-page-content").mouseenter(function(e) {					
				$( "#ball" ).addClass("hold")
			});
			
			$("#main-page-content").mouseleave(function(e) {					
				$( "#ball" ).removeClass("hold")
			});
			
			// Add clas on left or right
			var mouseX;
			$(document).on("mousemove", function(event) {
				mouseX = event.pageX;
			});
			$('#main-page-content.portfolio-page').each(function() {
				var thisWidth = $(this).width();
				$('#main-page-content.portfolio-page').mousemove(function() {
					if (thisWidth/2 < mouseX) {
						 $("#sidebar-overlay" ).addClass("right");
					  }
					 else {
						$("#sidebar-overlay" ).removeClass("right");
					 }
				});
			});
			
			
			$('#main-page-content.portfolio-page').on('mousedown', function(event) {				
				event.preventDefault();
				$( "#ball" ).removeClass("hold");
				TweenMax.to('#ball', 1,{width:60, height:60});
				TweenMax.to('#hold-event', 1,{scale:0, width:56, height:56});
				var progress = $('#hold-event');
				TweenMax.to(progress, 1, {force3D:true, backgroundColor : 'rgba(255, 255, 255, 1)'﻿, onComplete:function(){
					
					//Execute trigger click here
					var heroheight = $("#hero").height() 
					if ($("body").hasClass("smooth-scroll")) {
						TweenLite.to(scrollbar, 1.5, {scrollTo:heroheight, ease:Power4.easeInOut});
					} else {
						TweenLite.to(window, 1.5, {scrollTo:heroheight, ease:Power4.easeInOut});
					}
					
					TweenMax.to(progress, 0.3,{force3D:true, backgroundColor : 'rgba(255, 255, 255, 0)'});
					TweenMax.to('#ball', 0.3,{width:30, height:30});
					TweenMax.to($("#hero"), 2, {force3D:true, scale: 1, opacity:0, delay:0, ease:Power2.easeInOut});
					TweenMax.to($("#main"), 0.6, {force3D:true, scale: 1, opacity:0.3, delay:0, ease:Power2.easeInOut});
					$('#sidebar-overlay').addClass('active');
					
					//Fade In Navigation Lists
					var tlMenu = new TimelineLite();
					tlMenu.set($(".sidebar-timeline, .jssocials-share"), {x:-30, opacity:0});
					$(".sidebar-timeline, .jssocials-share").each(function(index, element) {
						tlMenu.to(element, 0.5, {x:0, opacity:1, delay:0.3, ease:Power3.easeOut}, index * 0.1)
					});
			  }});
			});
			
			$('#main-page-content.portfolio-page').on('mouseup touchend', function(event) {
				$( "#ball" ).addClass("hold")
				TweenMax.to('#ball', 0.3,{width:30, height:30});
				TweenMax.to('#hold-event', 0.3,{force3D:true, scale:1, width:26, height:26, backgroundColor : 'rgba(255, 255, 255, 0)'});
			});
			
			//Overlay Menu
			$('#show-filters, #close-sidebar').on('click', function() {			
				$('#sidebar-overlay').toggleClass('active');
				var navtitleheight = $(".hero-title").height()
				var navsubtitleheight = $(".hero-subtitle").height()
				
				setTimeout( function(){			
					if ($('#sidebar-overlay').hasClass("active")) {	
						TweenMax.to($("#hero, #show-filters"), 0.6, {force3D:true, scale: 1, opacity:0, delay:0.6, ease:Power2.easeInOut});
						TweenMax.to($("#main"), 0.6, {force3D:true, scale: 1, opacity:0.3, delay:0, ease:Power2.easeInOut});					
						
						//Fade In Navigation Lists
						var tlMenu = new TimelineLite();
						tlMenu.set($(".sidebar-timeline, .jssocials-share"), {x:-30, opacity:0});
						$(".sidebar-timeline, .jssocials-share").each(function(index, element) {
							tlMenu.to(element, 0.5, {x:0, opacity:1, delay:0.3, ease:Power3.easeOut}, index * 0.1)
						});
							
					} else {					
						
						TweenMax.to($("#hero, #show-filters"), 0.6, {force3D:true, scale: 1, opacity:1, delay:0.3, ease:Power2.easeInOut});
						TweenMax.to($("#main"), 0.6, {force3D:true, scale: 1, opacity:1, delay:0.3, ease:Power2.easeInOut});					
						
						
						//Fade Out Navigation Lists					
						var tlMenu = new TimelineLite();
						$(".sidebar-timeline, .jssocials-share").each(function(index, element) {
							tlMenu.to(element, 0.25, {opacity:0, x:30, ease:Power1.easeIn }, index * 0.1)
						});
						TweenMax.to('#hold-event', 0.3,{force3D:true, scale:1, width:26, height:26, backgroundColor : 'rgba(255, 255, 255, 0)'});	
						TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
						$("#ball").removeClass("close-icon");
						$('#ball i').remove();
						
					}							
				} , 20 );
			});
			
			
			$("#close-sidebar").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 1.8});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("close-icon").append( '<i class="fa fa-times"></i>' );
			});
				
			$("#close-sidebar").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("close-icon");
				$('#ball i').remove();
			});
			
			FitThumbScreen();
			
		}	
	
	}//End Portfolio


/*--------------------------------------------------
Function Showcase
---------------------------------------------------*/
	
	function LargeShowcaseCarousel() {
		
	
		if( $('#large-showcase-carousel').length > 0 ){	
		
			var interleaveOffset = 0;

			var swiperOptions = {
				direction: "horizontal",
				loop: false,
				grabCursor: true,
				resistance : true,
				resistanceRatio : 0.6,
				speed:1000,
				centeredSlides: true,
				spaceBetween: 300,
				slidesPerView: 'auto',
				breakpoints: {
					1466: {
					  slidesPerView: 'auto',
					  spaceBetween: 200
					},
					1024: {
					  slidesPerView: 'auto',
					  spaceBetween: 80
					},
					767: {
					  slidesPerView: 'auto',
					  spaceBetween: 50
					},
					479: {
					  slidesPerView: 'auto',
					  spaceBetween: 2
					}
				},
				autoplay: false,
				effect: "slide",
				mousewheel: true,				
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				  },
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {
					progress: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress = swiper.slides[i].progress;
							var innerOffset = swiper.width * interleaveOffset;
							var innerTranslate = slideProgress * innerOffset;
							swiper.slides[i].querySelector(".img-mask").style.transform = "translate3d(" + innerTranslate + "px,0, 0)";
						}
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".img-mask").style.transition = speed + "ms";
						}   
					},
					init: function () {
						setTimeout(function(){
							TweenMax.to($('.swiper-slide-active').nextAll().find('.slide-title span'), 0,{scale:1.1, x:100, opacity:0, ease:Power2.easeInOut});
							TweenMax.to($('.swiper-slide-active').nextAll().find('.slide-cat'), 0,{x:20, opacity:0, delay:0.3, ease:Power2.easeIn});
						} , 100 );	
					},
					slideNextTransitionStart: function () {		
												
						var prevslidetitle = new TimelineLite();						
						prevslidetitle.staggerTo($('.swiper-slide-active').prevAll().find('.slide-title span'), 0.5, {scale:0.9, x:-100, opacity:0, ease:Power2.easeInOut},  0.02)
						var prevslidecaption = new TimelineLite();
						prevslidecaption.staggerTo($('.swiper-slide-active').prevAll().find('.slide-cat'), 0.5, {x:-20, opacity:0, delay:0.3, ease:Power2.easeIn},  0.02)
						
						var activeslidetitle = new TimelineLite();												
						activeslidetitle.staggerTo($('.swiper-slide-active').find('.slide-title span'), 0.5, {scale:1, x:0, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut}, 0.02)
						var activeslidecaption = new TimelineLite();
						activeslidecaption.staggerTo($('.swiper-slide-active').find('.slide-cat'), 0.5, {x:0, opacity:1, scale:1, delay:0.6, ease:Power2.easeOut}, 0.02)							
						
						var nextslidetitle = new TimelineLite();						
						nextslidetitle.staggerTo($('.swiper-slide-active').nextAll().find('.slide-title span'), 0.5, {scale:1.1, x:100, opacity:0, ease:Power2.easeInOut},  0.02)
						var nextslidecaption = new TimelineLite();	
						nextslidecaption.staggerTo($('.swiper-slide-active').nextAll().find('.slide-cat'), 0.5, {x:20, opacity:0, delay:0.3, ease:Power2.easeIn},  0.02)						
						
												
					},
					slidePrevTransitionStart: function () {	
						
						//TweenMax.set($(".swiper-slide"), {transform:"skew(-10deg, 0deg)"});
						
						var prevslidetitle = new TimelineLite();						
						prevslidetitle.staggerTo($('.swiper-slide-active').prevAll().find('.slide-title span'), 0.5, {scale:1.1, x:-100, opacity:0, ease:Power2.easeInOut},  -0.02)
						var prevslidecaption = new TimelineLite();
						prevslidecaption.staggerTo($('.swiper-slide-active').prevAll().find('.slide-cat'), 0.5, {x:-40, opacity:0, delay:0.2, ease:Power2.easeIn},  -0.02)
						
						var activeslidetitle = new TimelineLite();												
						activeslidetitle.staggerTo($('.swiper-slide-active').find('.slide-title span'), 0.5, {scale:1, x:0, opacity:1, scale:1, delay:0.5, ease:Power2.easeOut}, -0.02)
						var activeslidecaption = new TimelineLite();
						activeslidecaption.staggerTo($('.swiper-slide-active').find('.slide-cat'), 0.5, {x:0, opacity:1, scale:1, delay:0.6, ease:Power2.easeOut}, -0.02)							
						
						var nextslidetitle = new TimelineLite();						
						nextslidetitle.staggerTo($('.swiper-slide-active').next().find('.slide-title span'), 0.5, {scale:0.9, x:100, opacity:0, ease:Power2.easeInOut},  -0.02)
						var nextslidecaption = new TimelineLite();	
						nextslidecaption.staggerTo($('.swiper-slide-active').next().find('.slide-cat'), 0.5, {x:40, opacity:0, delay:0, ease:Power2.easeIn},  -0.02)
						
						
						    
					},
				}, 
			};
				
			var swiper = new Swiper(".swiper-container", swiperOptions);
			
			$('.slide-title').each(function(){
				var words = $(this).text().slice(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<span /> ").text(words[index]));
				}
			});
			
			$(".swiper-slide").on('mouseenter', function(event) {
				TweenMax.to('#ball', 0.2,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 1.8});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
				$(this).find('video').each(function() {
					$(this).get(0).play();
				});
			});
			
			$('.swiper-slide').on('mousedown', function(event) {
				return false;
			});
				
			$(".swiper-slide").on('mouseleave', function(event) {
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
				$(this).find('video').each(function() {
					$(this).get(0).pause();
				});
			});
			
			$('#large-showcase-carousel').on('mousedown touchstart', function(event) {				
				$('body').addClass('scale-up');
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});	
			});			
			$('#large-showcase-carousel').on('mouseup touchend', function(event) {				
				setTimeout(function(){
					$('body').removeClass('scale-up');
				} , 0 );	
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});	
			});
			
			$('body').on('mouseup touchend', function(event) {				
				setTimeout(function(){
					$('body').removeClass('scale-up');
				} , 0 );	
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
			});
			
			FitSlideScreen();
		}	
		
			
	}//End Showcase Carousel
	
	
	
/*--------------------------------------------------
Function Showcase
---------------------------------------------------*/
	
	function ShowcaseCarousel() {
		
	
		if( $('#showcase-carousel').length > 0 ){	
		
			var interleaveOffset = 0;

			var swiperOptions = {
				direction: "horizontal",
				loop: false,
				grabCursor: true,
				resistance : true,
				resistanceRatio : 0.6,
				speed:1000,
				spaceBetween: 40,
				slidesPerView: 3,
				breakpoints: {
					1466: {
					  slidesPerView: 2,
					  spaceBetween: 40
					},
					1024: {
					  slidesPerView: 2,
					  spaceBetween: 30
					},
					767: {
					  slidesPerView: 1,
					  spaceBetween: 30
					},
					479: {
					  slidesPerView: 1,
					  spaceBetween: 20
					}
				},
				autoplay: false,
				effect: "slide",
				mousewheel: true,				
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				  },
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {
					progress: function() {
					  var swiper = this;
					  for (var i = 0; i < swiper.slides.length; i++) {
						var slideProgress = swiper.slides[i].progress;
						var innerOffset = swiper.width * interleaveOffset;
						var innerTranslate = slideProgress * innerOffset;
						swiper.slides[i].querySelector(".img-mask").style.transform = "translate3d(" + innerTranslate + "px,0, 0)";
					  }
					},
					touchStart: function() {
					  var swiper = this;
					  for (var i = 0; i < swiper.slides.length; i++) {
						swiper.slides[i].style.transition = "";
					  }
					},
					setTransition: function(speed) {
					  var swiper = this;
					  for (var i = 0; i < swiper.slides.length; i++) {
						swiper.slides[i].style.transition = speed + "ms";
						swiper.slides[i].querySelector(".img-mask").style.transition = speed + "ms";
					  }   
				  }
  				}
			};
				
			var swiper = new Swiper(".swiper-container", swiperOptions);
			
			$(".swiper-slide").on('mouseenter', function(event) {
				TweenMax.to('#ball', 0.2,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 1.8});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
				$(this).find('video').each(function() {
					$(this).get(0).play();
				});
			});
			
			$('.swiper-slide').on('mousedown', function(event) {
				return false;
			});
				
			$(".swiper-slide").on('mouseleave', function(event) {
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
				$(this).find('video').each(function() {
					$(this).get(0).pause();
				});
			});
			
			$('#showcase-carousel').on('mousedown touchstart', function(event) {				
				$('body').addClass('scale-up');
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
				
			});			
			$('#showcase-carousel').on('mouseup touchend', function(event) {				
				$('body').removeClass('scale-up');
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
			});
			
			$('body').on('mouseup touchend', function(event) {				
				$('body').removeClass('scale-up');
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
			});
			
			FitSlideScreen();
		}	
		
			
	}//End Showcase Carousel	
	
	
	
/*--------------------------------------------------
Function Showcase
---------------------------------------------------*/
	
	function Showcase() {
		
	
		if( $('#showcase-slider').length > 0 ){	
			
			var titles = [];
			var subtitle = [];
			var counter = [];
			$('#showcase-slider .swiper-slide').each(function(i) {
			  	titles.push($(this).data('title'))
				subtitle.push($(this).data('subtitle'))
				counter.push($(this).data('number'))
			});
			
			var interleaveOffset = 0.4;

			var swiperOptions = {
				direction: "horizontal",
				loop: false,
				grabCursor: true,
				resistance : true,
				resistanceRatio : 0,
				speed:1200,
				autoplay: false,
				effect: "slide",
				mousewheel: true,				
				pagination: {
					el: '.showcase-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return '<div class="tab__link ' + className + '">' + '<div class="counter-wrap">' + '<div class="counter">' + counter[index] + '</div>' + '</div>' + '<div class="subtitle">' + subtitle[index] + '</div>' + '<div class="title">' + titles[index] + '</div>' + '</div>';
						 
					},
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {
					progress: function() {
					  var swiper = this;
					  for (var i = 0; i < swiper.slides.length; i++) {
						var slideProgress = swiper.slides[i].progress;
						var innerOffset = swiper.width * interleaveOffset;
						var innerTranslate = slideProgress * innerOffset;
						swiper.slides[i].querySelector(".img-mask").style.transform = "translate3d(" + innerTranslate + "px,0, 0)";
					  }
					},
					touchStart: function() {
					  var swiper = this;
					  for (var i = 0; i < swiper.slides.length; i++) {
						swiper.slides[i].style.transition = "";
					  }
					},
					setTransition: function(speed) {
					  var swiper = this;
					  for (var i = 0; i < swiper.slides.length; i++) {
						swiper.slides[i].style.transition = speed + "ms";
						swiper.slides[i].querySelector(".img-mask").style.transition = speed + "ms";
					  }   
				  },
					init: function () {
						
						$('.swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						});
						
					},
					slideNextTransitionStart: function () {					
						
						//TweenMax.set($(".swiper-slide"), {transform:"skew(10deg, 0deg)"});						
						var prevslidetitle = new TimelineLite();						
						prevslidetitle.staggerTo($('.swiper-pagination-bullet-active').prev().find('.title span'), 0.5, {scale:0.9, x:-100, opacity:0, ease:Power2.easeInOut},  0.02)
						var prevslidecaption = new TimelineLite();
						prevslidecaption.staggerTo($('.swiper-pagination-bullet-active').prev().find('.subtitle'), 0.5, {x:-20, opacity:0, delay:0.3, ease:Power2.easeIn},  0.02)
						
						var activeslidetitle = new TimelineLite();												
						activeslidetitle.staggerTo($('.swiper-pagination-bullet-active').find('.title span'), 0.5, {scale:1, x:0, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut}, 0.02)
						var activeslidecaption = new TimelineLite();
						activeslidecaption.staggerTo($('.swiper-pagination-bullet-active').find('.subtitle'), 0.5, {x:0, opacity:1, scale:1, delay:0.6, ease:Power2.easeOut}, 0.02)							
						
						var nextslidetitle = new TimelineLite();						
						nextslidetitle.staggerTo($('.swiper-pagination-bullet-active').next().find('.title span'), 0.5, {scale:1.1, x:100, opacity:0, ease:Power2.easeInOut},  0.02)
						var nextslidecaption = new TimelineLite();	
						nextslidecaption.staggerTo($('.swiper-pagination-bullet-active').next().find('.subtitle'), 0.5, {x:20, opacity:0, delay:0.3, ease:Power2.easeIn},  0.02)
						
						var tl = new TimelineLite();
						
						$('.swiper-pagination-bullet-active').prev().find('.counter').each(function(index, element) {
							tl.to(element, 0.3, {scale:1, y:-20, opacity:0, ease:Power2.easeIn}, index * 0.01)
						});
						
						$('.swiper-pagination-bullet-active').find('.counter').each(function(index, element) {
							tl.to(element, 0.4, {scale:1, y:0, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut}, index * 0.01)
						});
						
						$('.swiper-pagination-bullet-active').next().find('.counter').each(function(index, element) {
							tl.to(element, 0.3, {scale:1, y:20, opacity:0, ease:Power2.easeIn}, index * 0.01)
						});
												
					},
					slidePrevTransitionStart: function () {	
						
						//TweenMax.set($(".swiper-slide"), {transform:"skew(-10deg, 0deg)"});
						
						var prevslidetitle = new TimelineLite();						
						prevslidetitle.staggerTo($('.swiper-pagination-bullet-active').prev().find('.title span'), 0.5, {scale:1.1, x:-100, opacity:0, ease:Power2.easeInOut},  -0.02)
						var prevslidecaption = new TimelineLite();
						prevslidecaption.staggerTo($('.swiper-pagination-bullet-active').prev().find('.subtitle'), 0.5, {x:-20, opacity:0, delay:0.3, ease:Power2.easeIn},  -0.02)
						
						var activeslidetitle = new TimelineLite();												
						activeslidetitle.staggerTo($('.swiper-pagination-bullet-active').find('.title span'), 0.5, {scale:1, x:0, opacity:1, scale:1, delay:0.5, ease:Power2.easeOut}, -0.02)
						var activeslidecaption = new TimelineLite();
						activeslidecaption.staggerTo($('.swiper-pagination-bullet-active').find('.subtitle'), 0.5, {x:0, opacity:1, scale:1, delay:0.6, ease:Power2.easeOut}, -0.02)							
						
						var nextslidetitle = new TimelineLite();						
						nextslidetitle.staggerTo($('.swiper-pagination-bullet-active').next().find('.title span'), 0.5, {scale:0.9, x:100, opacity:0, ease:Power2.easeInOut},  -0.02)
						var nextslidecaption = new TimelineLite();	
						nextslidecaption.staggerTo($('.swiper-pagination-bullet-active').next().find('.subtitle'), 0.5, {x:20, opacity:0, delay:0.3, ease:Power2.easeIn},  -0.02)
						
						
						var tl = new TimelineLite();
						
						$('.swiper-pagination-bullet-active').prev().find('.counter').each(function(index, element) {
							tl.to(element, 0.3, {scale:1, y:-20, opacity:0, delay:0.1,  ease:Power2.easeIn}, index * 0.01)
						});
						
						$('.swiper-pagination-bullet-active').find('.counter').each(function(index, element) {
							tl.to(element, 0.4, {scale:1, y:0, opacity:1, scale:1, delay:0.45, ease:Power2.easeOut}, index * 0.01)
						});
						
						$('.swiper-pagination-bullet-active').next().find('.counter').each(function(index, element) {
							tl.to(element, 0.3, {scale:1, y:20, opacity:0, delay:0.1,  ease:Power2.easeIn}, index * 0.01)
						});	
						    
					},					
					slideChangeTransitionStart: function () {
						
						$('.swiper-button-white').addClass('disable-click');
						
						LinesWidth(); 						
						
						$('.swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						}); 					
						
					},		
					slideChangeTransitionEnd: function () {						
						
						$('.swiper-button-white').removeClass('disable-click');
						
						$('.swiper-slide-prev').find('video').each(function() {
							$(this).get(0).pause();
						});
						
						$('.swiper-slide-next').find('video').each(function() {
							$(this).get(0).pause();
						});
						
					}
  				},
			};
			
			
			
			function LinesWidth() {
				
				var carouselWidth = $('#showcase-holder').width();
				var captionWidth = $('.swiper-pagination-bullet-active .title').width();
				if ($(window).width() >= 1466) {
				   lineWidth = carouselWidth / 2 - 440
				} else if ($(window).width() >= 1024) {
				   lineWidth = carouselWidth / 2 - 220
				} else if ($(window).width() >= 767) {
				   lineWidth = carouselWidth / 2 - 160
				} else if ($(window).width() >= 479) {
				   lineWidth = carouselWidth / 2 - 50
				} else {
				   lineWidth = carouselWidth / 2 - 40
				}
								
				$(".caption-border.left").css({
					'width': lineWidth - captionWidth/2 + 'px',
					'opacity': 1,
				});				
				$(".caption-border.right").css({
					'width': lineWidth - captionWidth/2 + 'px',
					'opacity': 1,
				});			
				
			}// End First Load
				
			var swiper = new Swiper(".swiper-container", swiperOptions);
			
			LinesWidth();
			
			$('.title').each(function(){
				var words = $(this).text().split(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<div /> ").text(words[index]));
				}
			});
			
			$('.title div').each(function(){
				var words = $(this).text().slice(" ");
				var total = words.length;
				$(this).empty();
				for (index = 0; index < total; index ++){
					$(this).append($("<span /> ").text(words[index]));
				}
			});
			
			
			// Tilt Showcase Wrapper
			var maxTilt = 1.5;
			var mouseX, mouseY;
			$(document).on("mousemove", function(event) {
				mouseX = event.pageX;
				mouseY = event.pageY;
			});
			$('#showcase-tilt').each(function() {
				var thisWidth = $(this).width();
				var thisHeight = $(this).height();
				var thisOffset = $(this).offset();
				$(document).mousemove(function() {
					var horTilt = ((mouseX / thisWidth) * (maxTilt * 2)) - maxTilt;
					var verTilt = (((mouseY - thisOffset.top) / thisHeight) * (maxTilt * 2)) - maxTilt;					
					TweenMax.to('#showcase-tilt', 1,{rotationY: horTilt, rotationX: verTilt, scale: 1.05, ease:Power1.easeOut});
				});
			});
			
			
			$('#showcase-slider').on('mousedown touchstart', function(event) {				
				$('body').addClass('scale-up');
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
				$('.caption-border, .arrows-wrap').fadeOut(200);
			});			
			$('#showcase-slider').on('mouseup touchend', function(event) {				
				$('body').removeClass('scale-up');
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				$('.caption-border, .arrows-wrap').fadeIn(200)	
			});
			
			
			$('.footer-button').on('mousedown touchstart', function(event) {
	
				event.preventDefault();
				$('.button-border span[data-hover]').each(function(){$(this).attr('data-hover', "Hold On");});
				$('.is-selected').addClass('down-hold');	
				$('.caption-border').append('<span class="btn-hold-progress-bar"></span>');
				$('.section-image').animate({
					opacity: '0.8',
				}, 800);
				
				var progress = $('.btn-hold-progress-bar');
				$(progress).width('0%');
				$(progress).animate({
					width: '100%',
				}, 1000, 'linear', function() {
					
				//Execute trigger click here
				var navtitleheight = $(".title").height()
				var navsubtitleheight = $(".subtitle").height()
				
				$('#showcase-tilt').addClass('disabled');
				TweenMax.to($(".subtitle"), 0.3, {force3D:true, opacity:0, scale:0.5, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".title"), 0.6, {force3D:true, y:-navtitleheight, delay:0.1, ease:Power2.easeInOut});
				TweenMax.set($(".subtitle"), {opacity:0, scale:1, y: 150, delay:0.4});
				TweenMax.to($(".swiper-pagination-bullet-active .subtitle"), 0.3, {force3D:true, opacity:1, scale:1, y:navsubtitleheight, delay:0.4, ease:Power2.easeOut});
				
								
				TweenMax.to($(".footer-button-wrap, .caption-border, .showcase-counter, .counter, .arrows-wrap"), 0.3, {force3D:true, opacity:0, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".button-wrap.left"), 0.3, {force3D:true, opacity:0, delay:0.1, x:-20, ease:Power2.easeOut});
				TweenMax.to('#ball', 0.3,{borderWidth: '2px', delay:0.3, scale:1, opacity:1});
				TweenMax.to($(".socials-wrap"), 0.3, {force3D:true, opacity:0, delay:0.1, x:20, ease:Power2.easeOut});
				$("body").addClass("load-project-page");
				setTimeout(function(){
					$('.swiper-slide-active').find('a.showcase-link-project').trigger('click');
					$("body").addClass("show-loader");	
				} , 500 );
			  });
			});
			
			$('.footer-button').on('mouseup touchend', function(event) {
	
				var progress = $('.btn-hold-progress-bar');
				$(progress).stop();
				$('.button-border span[data-hover]').each(function(){$(this).attr('data-hover', "Click and Hold");});;	
				$(progress).animate({width: '0%',}, 250);
				$('.section-image').stop();
				$('.section-image').animate({opacity: '1',}, 250);
			});
			
			TweenMax.set($("#showcase-holder"), {opacity:0, scale:1.1});
			TweenMax.to($("#showcase-holder"), 0.8, {force3D:true, opacity:1, scale:1, delay:0, ease:Power2.easeOut});
			TweenMax.to($(".swiper-pagination-bullet-active .subtitle"), 0.4, {force3D:true, opacity:1, y:0, delay:0.1, ease:Power2.easeOut});
			TweenMax.to($(".swiper-pagination-bullet-active .title"), 0.4, {force3D:true, opacity:1, y:0, delay:0.15, ease:Power2.easeOut});
			TweenMax.to($(".footer-button-wrap"), 0.4, {force3D:true, opacity:1, y:0, delay:0.2, ease:Power2.easeOut});
			TweenMax.to($(".showcase-counter, .swiper-pagination-bullet-active .counter, .arrows-wrap"), 0.3, {force3D:true, opacity:1, delay:0.15, ease:Power2.easeOut});
			
			
		}		
		
			
	}//End Showcase	
	
	

	

/*--------------------------------------------------
Function Back To Top
---------------------------------------------------*/
	
	function BackToTop() {
		
		$('.scroll-down-wrap').on('click', function() {
			$('html, body').animate({ scrollTop: $('#main-content').offset().top +1 },700);
			return false;
		});
		
		$(".flexnav").flexNav({ 'animationSpeed' : 250 });
	
	}//End Back To Top
	

	
	
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
	function Sliders() {
		
		$('.slider').owlCarousel({
			loop:true,
			margin:500,
			center: true,
			autoHeight:false,
			nav:true,
			navSpeed: 500,
			items:1,			
		});
		
		$( ".slider .owl-prev" ).removeClass( "parallax-wrap" );
		$( ".slider .owl-next" ).removeClass( "parallax-wrap" );
		
		if( $('.carousel').length > 0 ){
		
			$('.carousel').owlCarousel({
				loop:true,
				margin:20,
				autoHeight:false,
				navSpeed: 600,
				nav:true,
				responsive:{
					0:{
						items:1
					},
					479:{
						items:2
					},
					1024:{
						items:3
					},
					1466:{
						items:3
					}
				}
			});
			
			$( ".carousel .owl-prev" ).removeClass( "parallax-wrap" );
			$( ".carousel .owl-next" ).removeClass( "parallax-wrap" );
			
		}
				
		$(".owl-prev").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-left"></i>' );
		});
			
		$(".owl-prev").mouseleave(function(e) {
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
		
		$(".owl-next").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-right"></i>' );
		});
			
		$(".owl-next").mouseleave(function(e) {
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});		
		
		if( $('.text-carousel').length > 0 ){		
			$(".text-carousel").owlCarousel({	
				loop:true,
				dots:false,
				items:1,
				autoplay:false,
				smartSpeed: 750,
				autoHeight:true,
				autoplayHoverPause:true,
				nav:true,
				navText: ["<div class='prev-testimonial parallax-element'><i class='fa fa-chevron-left' aria-hidden='true'></i></div>","<div class='next-testimonial parallax-element'><i class='fa fa-chevron-right' aria-hidden='true'></i></div>"],
			});
		}
		
		
	}//End Sliders	
	
	
/*--------------------------------------------------
Function Justified Grid
---------------------------------------------------*/	
	
	function JustifiedGrid() {
		
		if( $('#justified-grid').length > 0 ){
		
			$('#justified-grid').justifiedGallery({
				rowHeight : 300,
				lastRow : 'nojustify',
				margins : 10
			});
		
		}
		
	}//End Justified Grid	
	
	
/*--------------------------------------------------
Function Lightbox
---------------------------------------------------*/
	
	function Lightbox() {
		
		$('.image-link').magnificPopup({
		  	type: 'image',
			mainClass: 'mfp-with-zoom',	
			gallery: {
			  enabled:true
			},		
			zoom: {
				enabled: true, 			
				duration: 300, 
				easing: 'ease-in-out', 
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}			
		});
		
		$(".image-link").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 1.8});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
		});
			
		$(".image-link").mouseleave(function(e) {
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1,  x: -15, y: -15});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
			
	}//End Lightbox	
	
	
	

	
	
/*--------------------------------------------------
Function Page PlayVideo
---------------------------------------------------*/	


	function PlayVideo() {
	
		if( $('.video-wrapper').length > 0 ){	
			
			
			$(".video-wrapper").mouseenter(function(e) {
				if ($(this).hasClass("play")) {
					$( "#ball" ).addClass("pause-movie")		
				}
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
				$( "#ball" ).addClass("over-movie").append( '<i class="fa fa-play"></i><i class="fa fa-pause"></i>' );
			});
			
			$(".video-wrapper").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				$("#ball").removeClass("over-movie").removeClass("pause-movie");
				$('#ball i').remove();
			});
			
			$(".video-wrapper .control").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{borderWidth: '20px', scale: 0});
			});
			
			$(".video-wrapper .control").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
			});
			
			var videocenter = ($(window).height() - $('.video-cover').height()) / 2
					
			////////////////////////////////////////////////////// REFACTOR //////////////////////////////////////////////////////
			// plays or pause the video function of its current state
			var playpause = function( videoObj ) {
				
				if( videoObj[0] != null ){
					if(videoObj[0].paused || videoObj[0].ended) {
						
						videoObj.parent().addClass('play');
						videoObj[0].play();
					}
					else {
						
						videoObj.parent().removeClass('play');
						videoObj[0].pause();
					}
				}
			};
			
			//Time format converter - 00:00
			var timeFormat = function(seconds){
				var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
				var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
				return m+":"+s;
			};
			
			// Events
			// click to video cover - will start the video
			$('.video-wrapper').on('click', function() {
				
				$('html,body').animate({scrollTop: $(this).offset().top - videocenter},390);		
				// hide the video cover in order to start playing
				$(this).find('.video-cover').addClass('hidden');
				
				$( "#ball" ).toggleClass("pause-movie");
				
				// pause first the other videos
				var current_wrapper = $(this);
				$('#main-page-content').find('.video-wrapper').each(function() {
					
					if( !current_wrapper.is( $(this) ) ){
						
						$(this).removeClass('play');
						$(this).find('video').each(function() {
							
							if( !$(this).get(0).paused && !$(this).get(0).ended ) {
								
								$(this).get(0).pause();
							}
						});
					}
					
				});
				
				// trigger the click for the inner video
				$(this).find('video').each(function() {

					playpause( $(this) );
				});

			});
			
			//fullscreen button clicked
			$('.btnFS').on('click', function( e ) {
					
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
					
				if($.isFunction(video_object[0].webkitEnterFullscreen)) {
					video_object[0].webkitEnterFullscreen();
				}	
				else if ($.isFunction(video_object[0].mozRequestFullScreen)) {
					video_object[0].mozRequestFullScreen();
				}
				else {
					alert('Your browsers doesn\'t support fullscreen');
				}
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
				
			});
				
			//sound button clicked
			$('.sound').on('click', function( e ) {
					
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
					
				video_object[0].muted = !video_object[0].muted;
				$(this).toggleClass('muted');
				if(video_object[0].muted) {
					parent_wrapper.find('.volumeBar').css('width',0);
				}
				else{
					parent_wrapper.find('.volumeBar').css('width', video_object[0].volume*100+'%');
				}
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
			});
			
			//progress bar (video timebar) clicked
			$('.progress').on('click', function( e ) {
				
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
									
				// calculate click position
				// and update video current time
				// as well as progress bar
				var maxduration 	= video_object[0].duration;
				var position 			= e.pageX - $(this).offset().left;
				var percentage 	= 100 * position / $(this).width();
				if(percentage > 100) {
					
					percentage = 100;
				}
				if(percentage < 0) {
					
					percentage = 0;
				}
				$('.timeBar').css('width', percentage+'%');	
				video_object[0].currentTime = maxduration * percentage / 100;
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
			});
			
			$('#main-page-content').find('video').each(function() {
			
				var video = $(this);
				var video_wrapper = $(this).parent();
				
				//remove default control when JS loaded
				video[0].removeAttribute("controls");
				video_wrapper.find('.control').fadeIn(500);
				video_wrapper.find('.caption').fadeIn(500);
			 
				//before everything get started and we have the info about the video such as duration
				video.on('loadedmetadata', function() {
					
					var video_object = $(this);
					var parent_wrapper = $(this).parent();
					//set video properties
					parent_wrapper.find('.current').text(timeFormat(0));
					parent_wrapper.find('.duration').text(timeFormat(video[0].duration));
					
				});
				
				//display current video buffered progress
				video.on('progress', function() {
					
					var video_object 		= $(this);
					var parent_wrapper 	= $(this).parent();
					var maxduration 		= video_object [0].duration;
					
					if (maxduration > 0) {
					  for (var i = 0; i < video_object [0].buffered.length; i++) {
							if (video_object [0].buffered.start(video_object [0].buffered.length - 1 - i) <video_object [0].currentTime) {
								var perc = (video_object [0].buffered.end(video_object [0].buffered.length - 1 - i) / maxduration) * 100 + "%";
								parent_wrapper.find('.bufferBar').css('width',perc+'%');
								break;
							}
						}
					}
					
				});
				
				//display current video play time
				video.on('timeupdate', function() {
					
					var parent_wrapper 	= $(this).parent();
					var currentPos 			= $(this).get(0).currentTime;
					var maxduration 		= $(this).get(0).duration;
					var perc 					= 100 * currentPos / maxduration;
					parent_wrapper.find('.timeBar').css('width',perc+'%');	
					parent_wrapper.find('.current').text(timeFormat(currentPos));	
				});
				
				//video screen and play button clicked
				video.on('click', function() { 
					
					playpause( $(this) ); 
				});
				
				//video canplay event
				video.on('canplay', function() {
					
					var parent_wrapper = $(this).parent();
					parent_wrapper.find('.loading').fadeOut(100); //?
				});
				
				//video canplaythrough event
				//solve Chrome cache issue
				var completeloaded = false;
				video.on('canplaythrough', function() {
					
					completeloaded = true;
				});
				
				//video ended event
				video.on('ended', function() {		
					
					$(this).get(0).pause();
					$(this).parent().removeClass("play");
					$( "#ball" ).toggleClass("pause-movie");
				});
			
				//video seeking event
				video.on('seeking', function() {
					
					//if video fully loaded, ignore loading screen
					if(!completeloaded) { 
						var parent_wrapper = $(this).parent();
						parent_wrapper.find('.loading').fadeIn(200); //?
					}	
				});
				
				//video seeked event
				video.on('seeked', function() { });
				
				//video waiting for more data event
				video.on('waiting', function() {
					
					var parent_wrapper = $(this).parent();
					parent_wrapper.find('.loading').fadeIn(200); //?
				});
				
			});
			
		}
		
	}// End PlayVideo					
	

	
/*--------------------------------------------------
Function Load Via Ajax
---------------------------------------------------*/	
		
	function LoadViaAjax() {		
		
		FirstLoad();		
		LazyLoad();		
		Portfolio();
		Showcase();
		ShowcaseCarousel();
		LargeShowcaseCarousel();
		BackToTop();
		Sliders();
		JustifiedGrid();
		Lightbox();
		ContactForm();
		PlayVideo();
		ContactMap();		
	
	}//End Load Via Ajax				
	
		
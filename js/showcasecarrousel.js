$(document).ready(function(){
    "use strict";

    ShowcaseCarousel();
})
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
    
        
}
$(document).ready(function(){
    "use strict";

    LargeShowcaseCarousel();
})
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
    
        
}
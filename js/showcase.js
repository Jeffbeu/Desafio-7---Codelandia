$(document).ready(function(){
    "use strict";

    Showcase();
})


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
            $('.button-border span[data-hover]').each(function(){$(this).attr('data-hover', "Mantenha");});
            $('.is-selected').addClass('down-hold');	
            $('.caption-border').append('<span class="btn-hold-progress-bar"></span>');
            $('.section-image').animate({
                opacity: '0.8',
            }, 800);
            window.location.href('agentes.html')
            
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
                window.location.href('index.html')
                $('.swiper-slide-active').find('a.showcase-link-project').trigger('click');
                $("body").addClass("show-loader");	
            } , 500 );
          });
        });
        
        $('.footer-button').on('mouseup touchend', function(event) {

            var progress = $('.btn-hold-progress-bar');
            $(progress).stop();
            $('.button-border span[data-hover]').each(function(){$(this).attr('data-hover', "Mantenha Precionado");});;	
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
    
        
}
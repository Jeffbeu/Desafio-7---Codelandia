$(document).ready(function(){

    "use strict";

    PageLoad();

})

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
        $('body').append('<audio loop autoplay volume="0" id="audio"><source src="images/music/val.mp3" type="audio/mpeg" /></audio>');
        var audio = document.getElementById("audio");    
        audio.volume = 0.8;
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
    
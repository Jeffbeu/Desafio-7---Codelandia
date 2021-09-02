$(document).ready(function(){
    "use strict"
})
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

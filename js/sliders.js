$(document).ready(function(){
    "use strict"

    Sliders();
})
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
    
    
}
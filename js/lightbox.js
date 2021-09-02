$(document).ready(function(){
    "use strict"

    Lightbox();
})
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
        
}
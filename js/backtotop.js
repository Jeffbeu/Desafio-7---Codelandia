$(document).ready(function(){
    "use strict";
BackToTop();

})
function BackToTop() {
		
    $('.scroll-down-wrap').on('click', function() {
        $('html, body').animate({ scrollTop: $('#main-content').offset().top +1 },700);
        return false;
    });
    
    $(".flexnav").flexNav({ 'animationSpeed' : 250 });

}
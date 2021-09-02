$(document).ready(function(){
    "use strict";

JustifiedGrid();
})
	
function JustifiedGrid() {
		
    if( $('#justified-grid').length > 0 ){
    
        $('#justified-grid').justifiedGallery({
            rowHeight : 300,
            lastRow : 'nojustify',
            margins : 10
        });
    
    }
    
}
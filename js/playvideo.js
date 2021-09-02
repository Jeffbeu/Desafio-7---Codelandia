$(document).ready(function(){
    "use strict";

PlayVideo();
})
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
    
}
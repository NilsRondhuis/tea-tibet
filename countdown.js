(function ( $ ) {
	function pad(n) {
	    return (n < 10) ? ("0" + n) : n;
	}
var start_seconds = 9234;
	$.fn.showclock = function() {
	    
	    var seconds = start_seconds;
	    if(seconds<=0 || isNaN(seconds)){
	    	this.hide();
	    	return this;
	    }

	    var days=Math.floor(seconds/86400);
	    seconds=seconds%86400;
	    
	    var hours=Math.floor(seconds/3600);
	    seconds=seconds%3600;

	    var minutes=Math.floor(seconds/60);
	    seconds=Math.floor(seconds%60);
	   
	    $('.hours-bottom').html(pad(hours));
	    $('.minutes-bottom').html(pad(minutes));
	    $('.seconds-bottom').html(pad(seconds));
      start_seconds = start_seconds - 1;
	};

	$.fn.countdown = function() {
		var el=$(this);
		el.showclock();
		setInterval(function(){
			el.showclock();	
          
		},1000);
		
	}

}(jQuery));

jQuery(document).ready(function(){
		$('.countdown').countdown();
})
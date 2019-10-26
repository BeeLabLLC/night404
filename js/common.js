/*-- Function bgScroll --*/
(function() {
  jQuery.fn.bgscroll = jQuery.fn.bgScroll = function( options ) {
    
    if( !this.length ) return this;
    if( !options ) options = {};
    if( !window.scrollElements ) window.scrollElements = {};
    
    for( var i = 0; i < this.length; i++ ) {
      
      var allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var randomId = '';
      for( var l = 0; l < 5; l++ ) randomId += allowedChars.charAt( Math.floor( Math.random() * allowedChars.length ) );
      
        this[ i ].current = 0;
        this[ i ].scrollSpeed = options.scrollSpeed ? options.scrollSpeed : 70;
        this[ i ].direction = options.direction ? options.direction : 'h';
        window.scrollElements[ randomId ] = this[ i ];
        
        eval( 'window[randomId]=function(){var axis=0;var e=window.scrollElements.' + randomId + ';e.current -= 1;if (e.direction == "h") axis = e.current + "px 0";else if (e.direction == "v") axis = "0 " + e.current + "px";else if (e.direction == "d") { e.current += 2;axis = "0 " + e.current + "px";} jQuery( e ).css("background-position", axis);}' );
                             
        setInterval( 'window.' + randomId + '()', options.scrollSpeed ? options.scrollSpeed : 70 );
      }
      
      return this;
    }
})(jQuery);

/*-- Function to rotate and move tumbleweed --*/
jQuery(document).ready(function() {
  
  var rotation = function (){
    jQuery("#tumbleweed").rotate({
      angle:0,
      animateTo:-360,
      duration:2000,
      callback: rotation,
      easing: function (x,t,b,c,d){
        return c*(t/d)+b;
      }
    });
  }
  rotation();

  var jQuerytumbleweed = jQuery('#tumbleweed');

    function runIt() {
        jQuerytumbleweed.animate({
           'left':'-5%','opacity':1
        }, 40000, 
        function() {
            jQuerytumbleweed.removeAttr("style");
            runIt();
        });
    }

    runIt();
});

/*-- call function bgScroll for moving cloud and star --*/
jQuery(function() {
  
  jQuery('#clouds').bgscroll({
    scrollSpeed: 100, 
    direction: 'h' 
  });
  
  jQuery('#stars').bgscroll({
    scrollSpeed: 100, 
    direction: 'v' 
  });

});


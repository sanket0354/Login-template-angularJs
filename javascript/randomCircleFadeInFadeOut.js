/**
 * Created by Sanket on 2017-07-11.
 */

$(document).ready(function() {
    setInterval(test,30);

});


function test(){
    var divSize = ((Math.random() * 100) + 50).toFixed(); // The size of div for circle to grow
    var color = '#' + Math.round(0xffffff * Math.random()).toString(16); // random color for circle border
    var posx = (Math.random() * ($(document).width() - divSize/2)).toFixed(); // random x position
    var posy = (Math.random() * ($(document).height() - divSize/2)).toFixed(); // random y position

    $newdiv = $('<div/>').css({
        'width':divSize+'px',
        'height':divSize+'px',
        'border':'3px solid ' + color

    });

    $newdiv.css({
        'animation-name' : 'example',
        'animation-duration' : '5s',
        'border-radius': '50px',
        'position':'absolute',
        'left':posx+'px',
        'top':posy+'px',
        'display':'none'
    }).appendTo( 'body' ).fadeIn(100).delay(500).fadeOut(800, function(){


    });

}
/*
  Oh hello there, code inspector!
  I see you looking through my source.  Very sneaky!
  Why not just email me, or check out my GitHub?
  github.com/dhruvarora
*/

var colors = ['#ab4642','#27ae60','#d32542','#ff7f19',
              '#ffc500'];
var rcolor = colors[Math.floor(Math.random() * colors.length)];

/* On document ready */
$(document).ready(function() {
  $('#greeting').addClass('animated fadeIn');
  $('#about').addClass('animated fadeIn');
  $('.links').addClass('animated fadeIn');

  $('#particles').particleground({
    dotColor: rcolor,
    lineColor: '#8e8e8e',
    density: '10000',
    directionX: 'right',
    maxSpeedX: '0.5',
    particleRadius: '8'
  });

  $('.intro').css({
    'margin-top': -($('.intro').height() / 2),
  });
  $('a').css({
    'color':rcolor
  });
});


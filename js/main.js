var $fruitani = $('.fruit-ani');
var $chartani = $('.chart-ani');

$fruitani.waypoint(function (direction) {
  if (direction == 'down') {
    $fruitani.addClass('js-svg-animate');
  } else {
    $fruitani.removeClass('js-svg-animate');
  }
}, {offset: '50%'});

$chartani.waypoint(function (direction) {
  if (direction == 'down') {
    $chartani.addClass('js-svg-animate-2');
  } else {
    $chartani.removeClass('js-svg-animate-2');
  }
}, {offset: 'bottom-in-view'});

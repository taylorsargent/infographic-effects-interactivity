var $fruitani = $('.fruit-ani');

$fruitani.waypoint(function (direction) {
  if (direction == 'down'){
    $fruitani.addClass('js-svg-animate');
  } else {
  $fruitani.removeClass('js-svg-animate');
  }
}, { offset: '50%' });

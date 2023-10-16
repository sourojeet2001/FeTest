/** This is the base slider of the homepage. */

(function ($, Drupal, once) {
  Drupal.behaviors.sliderBehaviour = {
    attach: function (context, settings) {
      once('matchSlider', 'html', context).forEach(function (element) {
        $('.match-slider .view-content').slick({
          dots: true,
          fade: true,
          cssEase: 'linear',
          autoplay: true,
          draggable: true,
          prevArrow: '<div class="arrow-left"><i class="bi bi-chevron-left"></i></div>',
          nextArrow: '<div class="arrow-right"><i class="bi bi-chevron-right"></i></div>',
        });
      })
    }
  };
})(jQuery, Drupal, once);

/** This function adds a dynamic supprt for India */

(function ($, Drupal, once) {
  Drupal.behaviors.dynamicSupport = {
    attach: function (context, settings) {
        if (typeof context['location'] !== 'undefined') { 
          var h1Element = $('.slick-slide[data-slick-index="' + 0 + '"] h1');
          if (h1Element.text().toLowerCase().includes('ind')) {
            $(".support").css('display', 'block');
          }
        }
        once('dynamicSupport', 'html', context).forEach(function (element) {
          $('.slick-slider').on('afterChange', function (event, slick, currentSlide) {
            var h1Element = $('.slick-slide[data-slick-index="' + currentSlide + '"] h1');
            if (h1Element.text().toLowerCase().includes('ind')) {
              $(".support").css('display', 'block');
            }
            else {
              $(".support").css('display', 'none');
            }
          });
        });
    }
  };
})(jQuery, Drupal, once);

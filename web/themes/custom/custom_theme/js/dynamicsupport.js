(function ($, Drupal, once) {
  Drupal.behaviors.dynamicSupport = {
    attach: function (context, settings) {
      once('dynamicSupport', '.slick-active', context).forEach(function (element) {
        if ($(".details h1:contains(India)")) {
          $(".support").css('display', 'block');
        }
      })
    }
  };
})(jQuery, Drupal, once);
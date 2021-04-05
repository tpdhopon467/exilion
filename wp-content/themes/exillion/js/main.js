// The plugin code
(function(jQuery) {
    if (jQuery('.ico_hamburger').length != 0) {
        jQuery('.ico_hamburger').click(function() {
            jQuery('.navbar-mobile').slideToggle();
        });
    }
    if (jQuery('.close').length != 0) {
        jQuery('.close').click(function() {
            jQuery('.navbar-mobile').slideToggle();
        });
    }
    jQuery("body").on("click", ".wpcf7-form-control-wrap", function() {
        jQuery(this).children('input').removeClass('wpcf7-not-valid');
    });
})(jQuery);
    (function( $ ){
    $.fn.hideMenu = function() {
        $('#nav-modal').toggle();
        $('.modal-backdrop.show').remove();
        $('body').removeClass('modal-open');
        $('#nav-modal').removeClass('show');
        $('#nav-modal').attr('aria-hidden', 'true');
        $('#nav-modal').css('display: none');
        return false;
    }; 
})( jQuery );
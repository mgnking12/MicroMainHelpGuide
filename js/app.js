(function($) {
    $(function() {
        $('.scrollspy').scrollSpy();

        $('#wnewbutton').click(function() {
            $("#whatsNew").removeClass("hidden-xs-up");
            $("#home-section").addClass("hidden-xs-up");
        });
        $('#vidbutton').click(function() {
            $("#video-section").removeClass("hidden-xs-up");
            $("#home-section").addClass("hidden-xs-up");
        })
    }); // end of document ready
})(jQuery); // end of jQuery name space

$(".skates-nav-link").on({
    mouseover: function() {
        $(".skates-sub-nav").stop().show();
    },

    mouseout: function() {
        $(".skates-sub-nav").stop().hide();
    }
})
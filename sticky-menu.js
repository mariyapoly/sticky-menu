// sticky-menu js
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 1) {
        $(".sticky").removeClass("scroll-header");
        $(".sticky").addClass("scroll-header1");
    } else {
        $(".sticky").addClass("scroll-header");
        $(".sticky").removeClass("scroll-header1");
    }
});
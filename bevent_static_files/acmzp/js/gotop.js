$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1000) {
            $('.actGotop').fadeIn(300);
        } else {
            $('.actGotop').fadeOut(300);
        }
    });
    $('.actGotop').click(function () {
        $('html,body').animate({scrollTop: '0px'}, 800);
    });
});
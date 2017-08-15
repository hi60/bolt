$(function(){
    $('.navToggle').click(function(){
        $(this).toggleClass('openNav');
        $('.headerBtn').slideToggle();
    });

    $(window).resize(function(){
        var w = $(window).width();
        var h = $('.headerBtn').height();
        var x = 767;
        if (w >= x) {
            $('.headerBtn').css({
                display: 'flex',
                height: 'auto'
            });
        } else {
            $('.headerBtn').css({
                display: 'none',
                height: 'auto'
            });
        }
    });
});
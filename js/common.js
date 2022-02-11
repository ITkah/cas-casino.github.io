$('nav ul li').each(function () {
    this_li = $(this);
    if ($(this_li).find('ul').length > 0) {
        $(this_li).append('<span class="arrow_mob"></span>');
    }
});

$('.arrow_mob').on('click', function () {
    $(this).siblings('.sub-menu').slideToggle('150');
});

$('.search_input').on('keyup', function () {
    var letter = $(this).val().length;
    if (letter >= 1) {
        $('.header_search').addClass('active_search');
    } else {
        $('.header_search').removeClass('active_search');
    }
});

$('.call_menu, .close_menu').on('click', function () {
    $('nav').toggleClass('nav_active');
    $('.bg').toggleClass('bg_active');
});

$('.methods_payment_btn').on('click', function () {
    $('.methods_payment_drop').slideToggle();
});

$('.casino_panel_change_item').on('click', function(e){
    e.preventDefault();
    $('.casino_panel_change_item').removeClass('active');
    $(this).addClass('active');
});
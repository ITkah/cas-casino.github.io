$('nav ul li').each(function() {
    this_li = $(this);
    if ($(this_li).find('ul').length > 0) {
        $(this_li).append('<span class="arrow_mob"></span>');
    }
});

$('.arrow_mob').on('click', function(){
    $(this).siblings('.sub-menu').slideToggle('150');
});

$('.search_input').on('keyup', function(){
    var letter = $(this).val().length;   
    if (letter >= 1) {
        $('.header_search').addClass('active_search');
    } else {
        $('.header_search').removeClass('active_search');
    }
});

$('.call_menu, .close_menu').on('click', function(){
    $('nav').toggleClass('nav_active');
    $('.bg').toggleClass('bg_active');
});

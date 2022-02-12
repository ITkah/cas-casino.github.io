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

$(".criteria_section_nav").on("click", "a", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$('.call_menu, .close_menu').on('click', function () {
    $('nav').toggleClass('nav_active');
    $('.bg').toggleClass('bg_active');
});

$('.methods_payment_btn').on('click', function () {
    $('.methods_payment_drop').slideToggle();
    $(this).toggleClass('disabled');
    if ($(this).attr('data-show') === "true") {
        $(this).text("Show all");
        $(this).attr('data-show', "false");
    }
    else {
        $(this).text("Hide");
        $(this).attr('data-show', "true");
    }
});

$('.criteria_section_btn').on('click', function () {
    $(this).toggleClass('disabled');
    $('.criteria_section_item_drop').slideToggle();
    if ($(this).attr('data-show') === "true") {
        $(this).text("Continue reading");
        $(this).attr('data-show', "false");
    }
    else {
        $(this).text("Hide");
        $(this).attr('data-show', "true");
    }
});

$(function () {
    $(".tabs_nav").on("click", ".tabs_nav_item:not(.active)", function () {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest(".tabs")
            .find(".tabs_content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });
});

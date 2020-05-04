$(function () {
  let headerList = $('.header-list');

  $('.hamburger').on('click', function () {
    $(this).toggleClass('is-active');
    if ($(this).hasClass('is-active')) {
      headerList.animate({top: '0', right: '0'});
    } else {
      // $('.header-list').animate().removeClass('active');
      headerList.animate({top: '-100vw', right: '-100vh'});
    }
  });
  $(window).resize(function () {
    if ($(window).width() <= '992') {
      headerList.append($('.phone'));
      $('.instructions-list-block > h2').after($('.instructions-image'));
      $('.buy_agitation-text-even > h2').after($('.buy_agitation-image-even'));
      $('.buy_agitation-text-odd > h2').after($('.buy_agitation-image-odd'));
    } else if ($(window).width() > '992') {
      $('.header-btn-wrap').before($('.phone'));
      $('.instructions>.container>.row').prepend($('.instructions-image'));
      $('.buy_agitation>.container>.row:even').prepend($('.buy_agitation-image-even'));
      $('.buy_agitation>.container>.row:odd').append($('.buy_agitation-image-odd'));
    }
  });
});

// .instructions-image

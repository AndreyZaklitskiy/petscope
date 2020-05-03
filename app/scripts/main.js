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
      $('.instructions-list-block > h2').after($('.instructions-image'))
    } else if ($(window).width() > '992') {
      $('.header-btn-wrap').before($('.phone'));
      $('.instructions>.container>.row').prepend($('.instructions-image'))
    }
  });
});

// .instructions-image

$(function () {
  let headerList = $('.header-list');
  $('.hamburger').on('click', function () {
    $(this).toggleClass('is-active');
    if ($(this).hasClass('is-active')) {
      headerList.animate({top: '0', right: '0'});
    } else {
      headerList.animate({top: '-100vw', right: '-100vh'});
    }
  });
  function windowWidth() {
    /*$(window).resize(function () {

    });*/
    if ($(window).width() <= '992') {
      $('footer').children(headerList).append($('.phone'));
      $('.header-section').children(headerList).append($('.phone'));
    } else if ($(window).width() > '992') {
      $('footer').children('.header-btn-wrap').before($('.phone'));
      $('.header-section').children('.header-btn-wrap').before($('.phone'));
    }

    if ($(window).width() <= '992') {
      // headerList.closest().append($('.phone'));
      $('.instructions-list-block > h2').after($('.instructions-image'));
      $('.buy_agitation-text-even > h2').after($('.buy_agitation-image-even'));
      $('.buy_agitation-text-odd > h2').after($('.buy_agitation-image-odd'));
    } else if ($(window).width() > '992') {
      // $('.header-btn-wrap').before($('.phone'));
      $('header').children('.instructions>.container>.row').closest().prepend($('.instructions-image'));
      $('.buy_agitation>.container>.row:even').prepend($('.buy_agitation-image-even'));
      $('.buy_agitation>.container>.row:odd').append($('.buy_agitation-image-odd'));
    }
  }
  windowWidth();

  $('.table-button').on('click', function () {
    let list = $('.table-button-list');
    if(list.hasClass('open') == true) {
      list.slideUp();
      list.removeClass('open')
    }else {
      list.slideDown();
      list.addClass('open')
    }
  })
  /*Скрипт кнопки для таблицы*/
  let btnListItem = $('.table-button-list-item');
  btnListItem.on('click', function () {
    let text = $(this).children('span').text();
    let btnSpan = $('.table-button>span');
    btnSpan.text(text);
    let table = $('.table');
    let th = $(this);
    let tableCol = $('.table-col');
    let removeVisible = tableCol.removeClass('visible');
    if(th.hasClass('btn-list-2')) {
      tableCol.removeClass('visible');
      $('.table-col-2').addClass('visible');
    } else if (th.hasClass('btn-list-3')) {
      tableCol.removeClass('visible');
      $('.table-col-3').addClass('visible');
    }else if (th.hasClass('btn-list-4')) {
      tableCol.removeClass('visible');
      $('.table-col-4').addClass('visible');
    }
  })
});

// .instructions-image

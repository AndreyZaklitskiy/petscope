let petscope = {

  // method for initialization
  init() {
    for (let key in this) {
      if (key !== 'init') this[key]();
    }
  },

  // handler for hamburger button
  hamburgerHandler() {
    $('.hamburger').on('click', () => {
      $(this).toggleClass('is-active');
      $('.header-list').toggleClass('is-active');
    });
  },

  // handler for table button
  tableButtonHandler() {
    $('.table-button').on('click', () => {
      $('.table-button-list').slideToggle().toggleClass('open');
    })
  },

}.init();

$(function () {
  let headerList = $('.header-list');
  function windowWidth() {
    if ($(window).width() <= '992') {
      headerList.closest().append($('.phone'));
      $('.instructions-list-block > h2').after($('.instructions-image'));
      $('.buy_agitation-text-even > h2').after($('.buy_agitation-image-even'));
      $('.buy_agitation-text-odd > h2').after($('.buy_agitation-image-odd'));
    } else if ($(window).width() > '992') {
      $('.header-btn-wrap').before($('.phone'));
      $('header').children('.instructions>.container>.row').closest().prepend($('.instructions-image'));
      $('.buy_agitation>.container>.row:even').prepend($('.buy_agitation-image-even'));
      $('.buy_agitation>.container>.row:odd').append($('.buy_agitation-image-odd'));
    }
  }
  windowWidth();

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

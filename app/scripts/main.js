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
      $('.hamburger').toggleClass('is-active');
      $('.header-list').toggleClass('is-active');
    });
  },
  // handlers for table buttons
  tableButtonHandler() {
    $('.table-button').on('click', () => {
      $('.table-button-list').slideToggle().toggleClass('open');
    });

    $('.table-button-list-item').on('click', function () {
      let self = $(this),
          text = self.children('span').text(),
          tableColIndex = self.index() + 1;

      $('.table-button > span').text(text);
      $('.table-col').removeClass('visible').eq(tableColIndex).addClass('visible');
    });
  },

}.init();

$(function () {
  let headerList = $('.header-list');
  function windowWidth() {
    /*if ($(window).width() <= '992') {
      $('footer').children(headerList).append($('.phone'));
      $('.header-section').children(headerList).append($('.phone'));
    } else if ($(window).width() > '992') {
      $('footer').children('.header-btn-wrap').before($('.phone'));
      $('.header-section').children('.header-btn-wrap').before($('.phone'));
    }*/

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
});

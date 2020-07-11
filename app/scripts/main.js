let petscope = {

  // method for initialization
  init() {
    for (let key in this) {
      if (key !== 'init') this[key]();
    }
  },
  discharge() {
    $('a, button').on('click', () => {
      event.preventDefault();
    });
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
  //forms validation
  formsValidation() {
    const phone = $('.phone-input');
    const name = $('.name-input');
    const formBtn = $('form.form button');
    phone.on('keydown', function (event) {
      let isDigit = false;
      let isDash = false;
      let isControl = false;
      if (event.key >= 0 || event.key <= 9) {
        isDigit = true;
      }
      if (event.key == '-') {
        isDash = true;
      }
      if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace') {
        isControl = true;
      }
      if (isDigit == false && isDash == false && isControl == false) {
        event.preventDefault();
      }
    });
  },
}.init();
$(function () {
  AOS.init();
  let headerList = $('.header-list');
  function windowWidth() {
    if ($(window).width() <= '992') {
      $('.instructions-list-block > h2').after($('.instructions-image'));
      $('.buy_agitation-text-even > h2').after($('.buy_agitation-image-even'));
      $('.buy_agitation-text-odd > h2').after($('.buy_agitation-image-odd'));
    } else if ($(window).width() > '992') {
      $('header').children('.instructions>.container>.row').closest().prepend($('.instructions-image'));
      $('.buy_agitation>.container>.row:even').prepend($('.buy_agitation-image-even'));
      $('.buy_agitation>.container>.row:odd').append($('.buy_agitation-image-odd'));
    }
  }
  windowWidth();
});

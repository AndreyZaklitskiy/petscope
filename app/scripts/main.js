let petscope = {
  // method for initialization
  init() {
    for (let key in this) {
      if (key !== 'init') this[key]();
    }
  },
  discharge() {
    $('a, button').on('click', () => {
      // event.preventDefault();
    });
  },

  hamburgerHandler() {
    $('.hamburger').on('click', () => {
      $('.hamburger').toggleClass('is-active');
      $('.header-list').toggleClass('is-active');
    });
  },

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
    /*name.on('keydown', function (event) {
      let isLetter = false;
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
    });*/

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

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formTest');
  form.addEventListener('submit', function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
  });



  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._reqq');
    for(let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);
      if(input.classList.contains('_email')) {
        if(emailTest(input)) {
          formAddError(input);
          error++;
          console.log('email error');
        }
      }if(input.value === '') {
        formAddError(input);
        error++;
        console.log('error');
      }
    }
  }

  function formAddError(input) {
    // input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    // input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  // Test function for Email
  function emailTest(input) {
    //return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);
    return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  }
});




//----------------
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

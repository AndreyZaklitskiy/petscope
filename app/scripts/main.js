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
      $('.header-menu').toggleClass('is-active');
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
}.init();


////////////////////////




document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
/*----------------input mask--------------*/
let tel = document.querySelectorAll('.phone-input');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(tel);

/*-----------just validate-------------*/
let validateForms = function (selector, rules, successModal, yaGoal) {
new window.JustValidate(selector, {
  rules: rules,
  submitHandler: function (form) {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }
    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    xhr.reset();
  }
})
}
validateForms('.consultation-form-2', {name: {required: true, minLength: 3},tel: {required: true}}, '.thanks-popup', 'send goal');
validateForms('.consultation-form-1', {name: {required: true, minLength: 3},tel: {required: true}}, '.thanks-popup', 'send goal');
validateForms('.head-form', {name: {required: true, minLength: 3},tel: {required: true}}, '.thanks-popup', 'send goal');



//--------...--------//
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

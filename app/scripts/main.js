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

    // let hamburger = document.querySelector('.hamburger');
    // let menu = document.querySelector('.header-menu');
    // hamburger.addEventListener('click', ()=> {
    //     hamburger.classList.toggle('is-active');

    //     menu.classList.toggle('is-active');
    // })


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
});
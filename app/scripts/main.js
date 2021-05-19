'use strict'

document.addEventListener('DOMContentLoaded', function() {
/*----------smooth scroll-------------*/
$('a.scroll-link').on('click', function(event) {
  let $anchor = $(this);
  $('.hamburger').removeClass('is-active');
  $('.header-menu').removeClass('is-active');
  let prnt = $(this).parent();
  prnt.addClass('active');
  prnt.siblings('.header-menu--item').removeClass('active');

  $('html, body')
    .stop()
    .animate(
      {
        scrollTop: $($anchor.attr('href')).offset().top - 75,
      },
      {
        duration : 2000,
        speecialEasing : {
          width : 'linear',
          height : 'easeInOutCubic'
        },
      }
    )
    event.preventDefault();
});

/*-------------fixed header----------------*/
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  let height = $('.header').height();
  if (wScroll > 20) {
    $('header').addClass('scroll');
    $('.head-block').css('padding-top', height);
  }
  else {
    $('header').removeClass('scroll');
    $('.head-block').css('padding-top', 0);
  }
});
/*------------hamburger--------------*/
$('.hamburger').on('click', () => {
  $('.hamburger').toggleClass('is-active');
  $('.header-menu').toggleClass('is-active');
});
/*---------delivery btn---------------*/
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
validateForms('.head-form', {name: {required: true, minLength: 3},tel: {required: true, minLength: 10}}, '.thanks-popup', 'send goal');
});
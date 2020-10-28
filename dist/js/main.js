"use strict";

document.addEventListener('DOMContentLoaded', function () {
  function initMenu() {
    var menuBtn = document.querySelector('.header__btn');
    var menuWrapper = document.querySelector('.profile-menu');
    document.body.addEventListener('click', function (event) {
      if (event.target.closest('.profile-menu')) {
        menuWrapper.classList.add('active');
        menuBtn.classList.add('active');
      } else if (event.target.closest('.header__btn')) {
        menuWrapper.classList.toggle('active');
        menuBtn.classList.toggle('active');
      } else {
        menuWrapper.classList.remove('active');
        menuBtn.classList.remove('active');
      }
    });
  }

  function changePageType() {
    var types = document.querySelectorAll('.header__links a');
    var activeType = document.querySelector('.header__links .active');
    activeType.addEventListener('click', function () {
      types.forEach(function (type) {
        type.style.display = "inline-block";
      });
    });
  }

  initMenu();
  changePageType();
});
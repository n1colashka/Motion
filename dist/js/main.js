"use strict";

document.addEventListener('DOMContentLoaded', function () {
  function initMenu() {
    var menuBtn = document.querySelector('.header__btn');
    var menuWrapper = document.querySelector('.profile-menu');
    document.body.addEventListener('click', function (event) {
      if (event.target.closest('.profile-menu') || event.target.closest('.header__btn')) {
        menuWrapper.classList.toggle('active');
        menuBtn.classList.toggle('active');
      } else {
        menuWrapper.classList.remove('active');
        menuBtn.classList.remove('active');
      }
    });
  }

  initMenu();
});
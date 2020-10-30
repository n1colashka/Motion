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
    document.body.addEventListener('click', function (event) {
      if (event.target === activeType) {
        event.preventDefault();
      }

      if (!event.target.closest('.header__links a')) {
        types.forEach(function (type) {
          type.style.display = "none";
        });
      } else {
        types.forEach(function (type) {
          type.style.display = "inline-block";
        });
      }

      activeType.style.display = "inline-block";
    });
  }

  function initFilter() {
    var filter = document.querySelector('.filter');

    if (filter) {
      filter.addEventListener('click', function (event) {
        if (event.target.classList.contains('filter__item-title')) {
          event.target.parentElement.classList.toggle('active');
        }
      });
      initMobileFilter();
    }
  }

  function initMobileFilter() {
    var filterBtn = document.querySelector('.filter__mobile-btn');
    var filterTitle = document.querySelector('.filter__mobile-title');
    var filter = document.querySelector('.filter');
    filterBtn.addEventListener('click', function (event) {
      event.preventDefault();
      filter.classList.add('active');
      filterBtn.style.display = 'none';
    });
    filterTitle.addEventListener('click', function (event) {
      filter.classList.remove('active');
      filterBtn.style.display = 'flex';
    });
  }

  function initPaymentsAccordion() {
    var paymentBlock = document.querySelector('.tariffs__payment');
    var paymentsTitle = document.querySelector('.tariffs__payment-title');
    paymentsTitle.addEventListener('click', function () {
      paymentBlock.classList.toggle('active');
    });
  }

  function initReadMore() {
    var tariffPageBtn = document.querySelector('.tariff-page__btn');
    var tariffPageText = document.querySelector('.tariff-page__text');

    if (tariffPageBtn) {
      tariffPageBtn.addEventListener('click', function () {
        tariffPageText.classList.add('active');
      });
    }
  }

  function initTariffSliders() {
    var tariffSlider = new Swiper('.tariffs-slider--1', {
      // Optional parameters
      initialSlide: 1,
      slidesPerView: 4,
      spaceBetween: 40,
      // Navigation arrows
      navigation: {
        nextEl: '.slider-next-1',
        prevEl: '.slider-prev-1'
      },
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 15,
          centeredSlides: true
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    });
    var tariffSlider2 = new Swiper('.tariffs-slider--2', {
      // Optional parameters
      initialSlide: 1,
      slidesPerView: 4,
      spaceBetween: 40,
      // Navigation arrows
      navigation: {
        nextEl: '.slider-next-2',
        prevEl: '.slider-prev-2'
      },
      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 15,
          centeredSlides: true
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 50
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    });
  } // Функции работающие только на мобильных устройствах


  if (window.innerWidth <= 768) {
    changePageType();
    initReadMore();
  }

  initMenu();
  initFilter();
  initTariffSliders();
  initPaymentsAccordion();
});
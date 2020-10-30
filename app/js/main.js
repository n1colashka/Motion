document.addEventListener('DOMContentLoaded', function() {

    function initMenu() {
        const menuBtn = document.querySelector('.header__btn');
        const menuWrapper = document.querySelector('.profile-menu');

        document.body.addEventListener('click', event => {
            if (event.target.closest('.profile-menu')) {
                menuWrapper.classList.add('active');
                menuBtn.classList.add('active');
            } else if (event.target.closest('.header__btn')) {
                menuWrapper.classList.toggle('active');
                menuBtn.classList.toggle('active');
            } 
            else {
                menuWrapper.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    }

    function changePageType() {
        const types = document.querySelectorAll('.header__links a');
        const activeType = document.querySelector('.header__links .active');

        document.body.addEventListener('click', event => {
            if (event.target === activeType) {
                event.preventDefault();
            }
            if (!(event.target.closest('.header__links a'))) {
                types.forEach(type => {
                    type.style.display = "none";
                });
            } else {
                types.forEach(type => {
                    type.style.display = "inline-block";
                });
            } 
            activeType.style.display = "inline-block";
        });
    }

    function initFilter() {
        const filter = document.querySelector('.filter');

        if (filter) {
            filter.addEventListener('click', event => {
                if (event.target.classList.contains('filter__item-title')) {
                    event.target.parentElement.classList.toggle('active');
                }
            });
            initMobileFilter();
        }
    }

    function initMobileFilter() {
        const filterBtn = document.querySelector('.filter__mobile-btn');
        const filterTitle = document.querySelector('.filter__mobile-title');
        const filter = document.querySelector('.filter');

        filterBtn.addEventListener('click', event => {
            event.preventDefault();
            filter.classList.add('active');
            filterBtn.style.display = 'none';
        });

        filterTitle.addEventListener('click', event => {
            filter.classList.remove('active');
            filterBtn.style.display = 'flex';
        });
    }

    function initPaymentsAccordion() {
        const paymentBlock = document.querySelector('.tariffs__payment');
        const paymentsTitle = document.querySelector('.tariffs__payment-title');

        paymentsTitle.addEventListener('click', () => {
            paymentBlock.classList.toggle('active');
        });
    }

    function initReadMore() {
        const tariffPageBtn = document.querySelector('.tariff-page__btn');
        const tariffPageText = document.querySelector('.tariff-page__text');

        if (tariffPageBtn) {
            tariffPageBtn.addEventListener('click', () => {
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
                prevEl: '.slider-prev-1',
            },
            breakpoints: {
                
                320: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1366: {
                    slidesPerView: 4,
                    spaceBetween: 40,
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
                prevEl: '.slider-prev-2',
            },
            breakpoints: {
                
                320: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1366: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                }
            }
        });
    }
    
    // Функции работающие только на мобильных устройствах
    if (window.innerWidth <= 768) {
        changePageType();
        initReadMore()
    }

    initMenu();
    initFilter();
    initTariffSliders();
    initPaymentsAccordion();
});
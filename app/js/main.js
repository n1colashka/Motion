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

    if (window.innerWidth <= 768) {
        changePageType();
    }

    initMenu();
    initFilter();
    
});
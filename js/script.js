let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');
burger.addEventListener('click',

    function () {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        document.body.classList.toggle('stop-scroll');
    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll')

    })
});

let icon = document.querySelector('.header__icon-search');
let search = document.querySelector('.search');
let close = search.querySelectorAll('.search__close');
icon.addEventListener('click',

    function () {

        search.classList.toggle('search--active');

    })

    close.forEach(function (el) {
    el.addEventListener('click', function () {

        search.classList.remove('search--active');

    })
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});

document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
            btn.classList.remove('tabs-nav__btn--active')
        });
        document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
        e.currentTarget.classList.add('tabs-nav__btn--active');
        document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
            tabsBtn.classList.remove('tabs-item--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});


new Accordion('.faq__list', {
    elementClass: 'item',
    triggerClass: 'item__question',
    panelClass: 'item__content',
    activeClass: 'item--active'
});
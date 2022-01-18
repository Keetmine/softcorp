(function() {
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.nav__burger');
    const rangeInput = document.querySelector('.order-form__discount-range');
    const rangeLabel = document.querySelector('.order-form__discount-title');
    let rangeSpan = rangeLabel.querySelector('span');

    burger.addEventListener('click', () => {
        !menu.classList.contains('menu__active') ? menu.classList.add('menu__active') : menu.classList.remove('menu__active');
    });
    rangeInput.addEventListener('change', () => {
        return rangeSpan.innerText = rangeInput.value + '%';
    });
})();
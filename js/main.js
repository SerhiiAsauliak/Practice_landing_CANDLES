const menuList = document.querySelector('.header__menu-list')
const menuBtn = document.querySelector('.menu__btn')

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu--open')
})
const menuList = document.querySelector('.header__menu-list')
const menuBtn = document.querySelector('.menu__btn')

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu--open')
})

const feedbackSwiper = new Swiper('.feedback__slider', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  });
const certificatesSwiper = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 2,
      },
      360: {
        slidesPerView: 1,
      },
    }
  });

  const accordeonTitles = document.querySelectorAll('.accordeon__title')

  accordeonTitles.forEach(el => {
    el.addEventListener('click', () => {
      el.nextElementSibling.classList.toggle('accordeon__text--visible')
      el.classList.toggle('accordeon__title-active')
    })
  })


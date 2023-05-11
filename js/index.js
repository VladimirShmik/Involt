 new Swiper('.partnersSlider', {
    slidesPerView: 7,
    spaceBetween: 10,
    speed: 400,
    autoplay: {
        delay: 3000,
    },
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});
 new Swiper('.reviewsSlider', {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 400,
    autoplay: {
        delay: 3000,
    },
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
     breakpoints: {
         // when window width is >= 320px
         320: {
             slidesPerView: 2,
             spaceBetween: 20
         },
         // when window width is >= 480px
         480: {
             slidesPerView: 3,
             spaceBetween: 30
         },
         // when window width is >= 640px
         992: {
             slidesPerView: 3,
             spaceBetween: 30
         },
         1200: {
             slidesPerView: 4,
             spaceBetween: 40
         }
     }
});
 new Swiper('.mainSlider', {
    slidesPerView: 1,
     effect: "fade",
    speed: 400,
    autoplay: {
        delay: 3000,
    },
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


 // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.querySelector('.nav-container')

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
const mobileWrap = document.querySelector('.mobile-wrap');
const mobileHamburger = document.querySelector('.hamburger-menu');
const body = document.querySelector('body');
const btnClose = document.querySelector('.mobile-wrap__close');
 function mobileAdd(){
  mobileWrap.classList.add('mobile-wrap--active');
  body.classList.add('no-scroll');
  mobileHamburger.classList.add('hamburger-menu--active');
 }
 mobileHamburger.addEventListener("click", mobileAdd);

 function mobileClose(){
     mobileWrap.classList.remove('mobile-wrap--active');
     body.classList.remove('no-scroll');
     mobileHamburger.classList.remove('hamburger-menu--active');
 }
 btnClose.addEventListener("click", mobileClose);

 const menuItem = document.querySelector('.menu-link');
 const menuList = document.querySelector('.menu-list');
 const navMenu = document.querySelector('.nav-menu');

 function listToggle(){
     menuList.classList.toggle('menu-list--active');
 }
 menuItem.addEventListener("touchstart", listToggle);
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');

}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}
var swiper = new Swiper(".home-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,      
    spaceBetween: 100,      
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,  
        },
        768:{
            slidesPerView:1,  
        }
    }
});

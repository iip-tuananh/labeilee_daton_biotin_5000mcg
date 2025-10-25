var swiper = new Swiper('.feedback-swiper', {
	lazy: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    speed: 1000,
    // effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.feedback-phone-swiper', {
	lazy: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.product-item-swiper', {
	slidesPerView: 1.3,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true, // slide chính giữa được căn giữa
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    speed: 1000,
    lazy: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.qa-item-swiper', {
	slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    speed: 1000,
    lazy: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
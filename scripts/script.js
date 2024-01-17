const swiper = new Swiper('.game-swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    speed: 1000,
    effect: 'coverflow',
    spacebetween: 0,
    // grabCursor: true,
    centeredSlides: true,
    // Navigation arrows
    navigation: {
        nextEl: '.slider-button-left',
        prevEl: '.slider-button-right',
    },
});
const swiper_2 = new Swiper('.gallery-section__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    speed: 1000,
    pagination: { el: ".swiper-pagination", type:"fraction" },
    // effect: 'coverflow',
    spacebetween: 0,
    // grabCursor: true,
    // centeredSlides: true,
    // Navigation arrows
    navigation: {
        nextEl: '.slider-gallery-button-right',
        prevEl: '.slider-gallery-button-left',
    },
    // slidesPerView: 'auto',
    // coverflowEffect: {
    //     rotate: 0,
    //     stretch: 80,
    //     depth: 200,
    //     modifier: 1,
    //     slideShadows: false,
    // },
});
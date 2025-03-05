const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    initialSlides: 2,
    speed: 600,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch:80,
        depth: 350,
        modifier: 1,
        slideShadows: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});
const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 900,
    autoplay: true,
    delay: 1500,
    spaceBetween: 0,
    navigation: {
        nextEl: '.second-button-next',
        prevEl: '.second-button-prev',
    },
});


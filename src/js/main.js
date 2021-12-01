function loader() {
    var $loader = $('.loader');
    var $card = $('.loader__card--back');

    $card.on('click', function() {
        $loader.fadeOut(300);
    });
}


function slider() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    });
}

function glitch() {
    var $img = $('.features__img');

    $img.mgGlitch({
        destroy: false,
        glitch: true,
        scale: true,
        blend: true,
        blendModeType: 'hue',
        glitch1TimeMin: 200,
        glitch1TimeMax: 400,
        glitch2TimeMin: 10,
        glitch2TimeMax: 100,
    });
}

loader();
slider();
glitch();
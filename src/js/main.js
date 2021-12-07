function loader() {
    var $loader = $('.loader');
    var $card = $('.loader__card--back');

    $card.on('click', function() {
        $loader.fadeOut(300);
    });
}

function nav() {
    var $navLink = $('.header__nav-link');
    var $section = $('.js-section');
  
    $navLink.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });
    $section.each(function(i) {
        $(this).attr('data-index', i);
    });
  
    $navLink.on('click', function() {
        var index = $(this).data('index');
        var sectionOffset = $('.js-section[data-index="'+ index + '"]').offset().top - 79;
        $('html,body').stop().animate({scrollTop: sectionOffset}, 900);
    });
}

function bannerBtn() {
    var $bannerBtn = $('.hero-banner__btn');
    var $download = $('.download');

    $bannerBtn.on('click', function() {
        var sectionOffset = $download.offset().top - 79;
        $('html,body').stop().animate({scrollTop: sectionOffset}, 900);
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

function faq() {
    var $question = $('.faq__item-question');
    var $answer = $('.faq__item-answer');

    $question.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    })

    $answer.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    })

    $question.on('click', function() {
        var index = $(this).data('index');
        $('.faq__item-answer[data-index="'+ index + '"]').stop().slideToggle(250);
    });
}

loader();
nav();
bannerBtn();
slider();
glitch();
faq();
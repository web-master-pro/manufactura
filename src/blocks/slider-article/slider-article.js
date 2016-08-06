$(document).ready(function(){

    var owl = $('.slider-article__slider');
    owl.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        navSpeed: 1500,
        dotsSpeed: 1500,
        autoHeight: true
    });

});



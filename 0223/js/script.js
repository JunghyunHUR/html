$(function(){
    $('.slick-slider').slick({
        dots:true,
        infinite: true,
        speed: 500,
        slidesToScrol:1,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '30px',
        autoplay: true,
        prevArrow: $('.prevArrow'),
        nextArrow: $('.nextArrow'),
        responsive: [
            {
            breakpoint: 768,
            settings:{
                centerMode:true,
                centerPadding:30,
                slideToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings:{
                    centerMode:true,
                    centerPadding:30,
                    slideToShow: 1
                    }
            }
        ]
    });
});

$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            infinite: true,
            speed:1200,
            // adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png" alt=""></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../icons/chevron-right-solid.png" alt=""></button>',
            responsive:[
                {
                    breakpoint: 992,
                    settings: {
                    dots: true,
                    arrows: false
                    }
                }
            ]
        }
    );
});

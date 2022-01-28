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
    //modal

    $('[data-modal=consultation]').on('click',function ()
    {
        $('.overlay,#consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function (){
        $('.overlay, #thanks,#consultation,#order').fadeOut('slow');
        }
    );
    $('.button_mini').on('click', function (){
        $('.overlay,#order').fadeIn('slow');
    });
    $('form').submit(function (e){
        e.preventDefault();

        if(!$(this).valid()){
            return;
        }
        $.ajax({
            type:"POST",
            url:"mailer/smart.php",
            data: $(this).serialize()
        }).done(function (){
            $(this).find("input").val("");


            $('form').trigger('reset');
        })
        return false;
    })
});

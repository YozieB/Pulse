$(document).ready(function(){
    $('.carousel__inner').slick({
        autoplay: true,
        responsive: [
            {
             breakpoint: 992,
             settings: {
                 dots: true,
                 arrows: false,
             }

        }
    ]
    });
  });
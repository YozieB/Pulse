$(document).ready(function () {
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

    $('.catalog__item-link').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog__item-content').eq(i).toggleClass('catalog__item-content_active');
            $('.catalog__item-list').eq(i).toggleClass('catalog__item-list_active');
        })
    })
});
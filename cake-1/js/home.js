$(document).ready(function(){
    
    /////// BNANER
    $('.bamner-carousell').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $(".slick-arrow.slick-next").text('').append(`<i class="fas fa-chevron-right"></i>`)
    $(".slick-arrow.slick-prev").text('').append(`<i class="fas fa-chevron-left"></i>`)

    $('.slick-dots li button').text('');

    //// FEATURE

    $('.feature-carousell').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '60px',

        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true
                }
              },
              {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true
                }
              }
        ]
      });
      $(window).on("load resize", function() {
        $('.feature-carousell .slick-next.slick-arrow').text('').append(`<i class="fas fa-chevron-right"></i>`)
        $('.feature-carousell .slick-prev.slick-arrow').text('').append(`<i class="fas fa-chevron-left"></i>`)
      })
      
  });

 
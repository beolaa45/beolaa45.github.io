$(document).ready(function(){
    console.log("ok")
    $('.bamner-carousell').slick({
        dots: true,
    });

    $(".slick-arrow.slick-next").text('').append(`<i class="fas fa-chevron-right"></i>`)
    $(".slick-arrow.slick-prev").text('').append(`<i class="fas fa-chevron-left"></i>`)

    $('.slick-dots li button').text('')
  });
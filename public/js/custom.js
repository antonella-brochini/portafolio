(function ($) {
  "use strict";
  

 $('.img_gallery').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
});

$('.single_service_part').hover(
  function(){$(this).addClass('active')},
  function(){$(this).removeClass('active')}
)

// $('.single_service_part').hover(function(){
//   $('.single_service_text').removeClass('active');
//   $('.single_service_text').addClass('active');
// });



var review = $('.client_review_part');
  if (review.length) {
    review.owlCarousel({
      items: 2,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: false,
      margin: 20,
      responsive:{
        0:{
            items:1,
            dots: false
        },
        600:{
            items:2,
        }
    }
    });
  }

}(jQuery));
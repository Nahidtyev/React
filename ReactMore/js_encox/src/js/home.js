AOS.init();

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var $grid = $('.grid').isotope({
  itemSelector:'.element-item',
  layoutMode:'fitRows'
})
$('.category button').on("click",function(){
  var value = $(this).attr('id');
  $grid.isotope({
      filter:value
  })
})


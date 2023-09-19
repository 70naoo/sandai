const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 2000,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters

  loop: true,
  slidesPerView: 1.4,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  speed: 2000,
  effect: "slide",
  touchStartPreventDefault: false,
  passiveListeners: false,

  breakpoints: {
    768: {
      slidesPerView: 2.6,
      spaceBetween: 50,
    }
  },

  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: 'true',
  // },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});



$(".drawer-icon").on("click", function (e) {
  e.preventDefault();

  $(".drawer-icon").toggleClass("is-active");
  $(".drawer-content").toggleClass("is-active");
  $(".drawer-background").toggleClass("is-active");

  return false;
});
$(".drawer-background").on("click",function(){
  $(".drawer-icon").toggleClass("is-active");
  $(".drawer-content").toggleClass("is-active");
  $(".drawer-background").toggleClass("is-active");
});


$(".qa-box-q").on('click', function () {
  $(this).next().slideToggle();
  $(this).children('.qa-box-icon').toggleClass('is-open')
})

$('a[href^="#"]').on('click', function(){
  var header = $(".header").innerHeight();
  var id = $(this).attr("href");
  var position = 0;
  if( id != "#" ){
    position = $(id).offset().top - header;
  };
  $('html,body').animate({
    scrollTop: position
  },
  300);
});


// $(window).on('scroll',function(){
//   if(100 < $(this).scrollTop()){
//     $('.to-top').addClass('is-show');
//   }else{
//     $(".to-top").removeClass('is-show');
//   }
// });



$(window).on("scroll", function() {
  // トップから100px以上スクロールしたら
  if (100 < $(this).scrollTop()) {
    // is-showクラスをつける
 $('.to-top').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  $('.to-top').removeClass( 'is-show' );
  }
});

new WOW().init();


$(".js-open-buttom1").on("click",function(e){
  e.preventDefault();
  jQuery('.mordal-course1').addClass( 'is-open' );
  jQuery('.mordal-background').addClass( 'is-open' );
})
$(".js-open-buttom2").on("click",function(e){
  e.preventDefault();
  jQuery('.mordal-course2').addClass( 'is-open' );
  jQuery('.mordal-background').addClass( 'is-open' );
})
$(".js-open-buttom3").on("click",function(e){
  e.preventDefault();
  jQuery('.mordal-course3').addClass( 'is-open' );
  jQuery('.mordal-background').addClass( 'is-open' );
})
$(".js-open-buttom4").on("click",function(e){
  e.preventDefault();
  jQuery('.mordal-course4').addClass( 'is-open' );
  jQuery('.mordal-background').addClass( 'is-open' );
})
$(".js-open-buttom5").on("click",function(e){
  e.preventDefault();
  jQuery('.mordal-course5').addClass( 'is-open' );
  jQuery('.mordal-background').addClass( 'is-open' );
})




$(".js-close-buttom").on("click",function(e){
  e.preventDefault();
  jQuery('.mordal-course').removeClass( 'is-open' );
  jQuery('.mordal-background').removeClass( 'is-open' );
})

$(".header-item a").on("click",function(){
  $(".header-item a").removeClass("is-active");
  $(this).addClass("is-active");
})

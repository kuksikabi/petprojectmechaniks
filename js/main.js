$(function () {
  var mixer = mixitup(".blog__card-list");
  var $slider = $(".customers__list").slick({
    dots: false,
    arrows: false,

    speed: 500,
    draggable:false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    variableWidth: false,
  });
  $(".customers__dots-btn").on("click", function () {
    var slideIndex = $(this).data("slide"); // берём номер слайда
    $slider.slick("slickGoTo", slideIndex); // переключаем
  });
  $slider.on("afterChange", function (e, slick, currentSlide) {
    $(".customers__dots-btn").removeClass("active");
    $('.customers__dots-btn[data-slide="' + currentSlide + '"]').addClass(
      "active",
    );
  });

  $('.customers__dots-btn[data-slide="0"]').addClass("active");
  $(".customers__arrow--prev").on("click", function (e) {
    e.preventDefault();
    $(".customers__list").slick("slickPrev");
  });
  $(".customers__arrow--next").on("click", function (e) {
    e.preventDefault();
    $(".customers__list").slick("slickNext");
  });
  $('.questions__item-link').on('click', function(e){
    e.preventDefault()
    $(this).toggleClass('questions__item-link--active')
    $(this).closest('.questions__item').find('.questions__item-text').slideToggle()
  })
});

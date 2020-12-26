$("document").ready(function () {
  let $modal = $(".modal-container");
  let $btnToTop = $(".btn__go-top");
  let $serviceItem = $(".service__item");
  let $serviceModalContainer = $(".service__modal-container");

  // Consult modal button
  $(".header__consult-btn").on("click", function () {
    $modal.fadeIn("slow");
  });

  $(".consult__close-btn").on("click", function () {
    $modal.fadeOut("slow");
  });

  // To Top button
  $(window).scroll(function () {
    if (
      document.documentElement.scrollTop > 400 ||
      document.body.scrollTop > 400
    ) {
      $btnToTop.fadeIn("slow");
    } else {
      $btnToTop.fadeOut("slow");
    }
  });

  $($btnToTop).on("click", function () {
    window.scrollTo(0, 0);
  });

  // Service modal
  $($serviceItem).on("click", function () {
    let $serviceContent = $(this).html();
    let $serviceModal = $($serviceModalContainer).children();
    $serviceModal.empty();
    $serviceModal.append('<span class="consult__close-btn">x</span>');
    $serviceModal.append($serviceContent);
    $serviceModalContainer.fadeIn("slow");
    $(".consult__close-btn").on("click", function () {
      $serviceModalContainer.fadeOut("slow");
    });
  });
});

// Slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 1,
    height: 170,
    width: 980,
  }).mount();
});

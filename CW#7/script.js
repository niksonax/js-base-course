$("document").ready(function () {
  $("#parallaxHere").parallax({ imageSrc: "img/parallax-pic.jpg" });
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider", {
    type: "loop",
    cover: true,
    heightRatio: 0.8,
  }).mount();
});

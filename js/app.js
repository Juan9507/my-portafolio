$(document).ready(function () {
  new WOW().init();
  gsap.to("#html", {
    scrollTrigger: {
      scrub: 0.5,
    },
    x: 1500,
    y: 500,
  });
  gsap.to("#python", {
    scrollTrigger: {
      scrub: 0.5,
    },
    x: -1500,
    y: 500,
  });
  gsap.to("#mern", {
    scrollTrigger: {
      scrub: 0.5,
    },
    scale: 1.5,
  });
});
document.addEventListener("DOMContentLoaded", function () {
  let tamanio = 3;
  console.log(screen.width);
  if (screen.width < "999") {
    tamanio = 3;
  } else {
    tamanio = 4;
  }
  let splideConoci = new Splide("#slider1", {
    type: "loop",
    perPage: tamanio,
    autoplay: true,
  });
  splideConoci.mount();
  var splide = new Splide("#slider2");
  splide.mount();
});

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

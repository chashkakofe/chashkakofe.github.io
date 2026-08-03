document.querySelectorAll(".about__carousel").forEach(function (carousel) {
  var track = carousel.querySelector(".about__carousel-track");
  var slides = Array.prototype.slice.call(carousel.querySelectorAll(".about__slide"));
  var dots = Array.prototype.slice.call(carousel.querySelectorAll(".about__carousel-dot"));
  if (slides.length < 2) return;

  var current = 0;
  var timer = null;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function goTo(index) {
    track.scrollTo({ left: track.clientWidth * index, behavior: "smooth" });
  }

  function next() {
    current = (current + 1) % slides.length;
    goTo(current);
  }

  function start() {
    stop();
    timer = setInterval(next, 4000);
  }

  function stop() {
    if (timer) clearInterval(timer);
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function (e) {
      e.preventDefault();
      current = i;
      goTo(i);
      start();
    });
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var index = slides.indexOf(entry.target);
          current = index;
          dots.forEach(function (d, i) {
            d.classList.toggle("is-active", i === index);
          });
        }
      });
    },
    { root: track, threshold: 0.6 }
  );
  slides.forEach(function (slide) {
    observer.observe(slide);
  });

  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("touchstart", stop, { passive: true });
  carousel.addEventListener("touchend", start);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stop();
    } else if (!reduceMotion) {
      start();
    }
  });

  if (!reduceMotion) {
    start();
  }
});

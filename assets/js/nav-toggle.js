document.querySelectorAll(".nav-toggle").forEach(function (btn) {
  var nav = btn.nextElementSibling;

  btn.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
});

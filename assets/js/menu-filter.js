document.querySelectorAll(".menu__tab").forEach(function (tab) {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".menu__tab").forEach(function (t) {
      t.classList.remove("is-active");
      t.setAttribute("aria-pressed", "false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-pressed", "true");

    var filter = tab.dataset.filter;
    document.querySelectorAll(".menu__category").forEach(function (category) {
      category.hidden = !(filter === "all" || category.dataset.category === filter);
    });
  });
});

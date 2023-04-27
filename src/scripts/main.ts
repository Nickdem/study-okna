window.addEventListener("DOMContentLoaded", function () {
  modals();
  tabs(
    ".glazing__slider ",
    ".glazing__block",
    ".glazing__content",
    "glazing__block--active"
  );
  tabs(
    ".decoration__slider",
    ".decoration__item--idle",
    ".decoration__block",
    "decoration__item--active"
  );

  forms();
});

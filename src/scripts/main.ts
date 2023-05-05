window.addEventListener("DOMContentLoaded", function () {
  const formObj = formState();
  const eventTime: number = new Date(2023, 8).getTime();

  calculator(formObj);
  checkNumInputs(".base-form input[name = 'user_phone']");
  checkNumInputs("#width");
  checkNumInputs("#height");

  modals(formObj.resetFormValues);
  tabs(
    ".glazing__slider ",
    ".glazing__block",
    ".glazing__content",
    "glazing__block--active",
    "data-num"
  );
  tabs(
    ".decoration__slider",
    ".decoration__item--idle",
    ".decoration__block",
    "decoration__item--active",
    "data-count"
  );

  tabs(
    ".form__icons",
    ".form__icon",
    ".form__img img",
    "form__icon--active",
    "data-view"
  );

  forms(formObj);
  timer(eventTime);

  images();
});

function getScrollWidth() {
  return window.innerWidth - document.body.offsetWidth;
}

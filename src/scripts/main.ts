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
    "glazing__block--active"
  );
  tabs(
    ".decoration__slider",
    ".decoration__item--idle",
    ".decoration__block",
    "decoration__item--active"
  );

  tabs(".form__icons", ".form__icon", ".form__img img", "form__icon--active");

  forms(formObj);
  timer(eventTime);
});

function formState(): TypeForm {
  const formValues: { [key: string]: string | number } = {};

  function setFormValues(key: string, value: string | number) {
    formValues[key] = value;
  }

  function resetFormValues() {
    formValues &&
      Object.keys(formValues).forEach(function (key) {
        delete formValues[key];
      });
  }

  return { formValues, resetFormValues, setFormValues };
}

function checkNumInputs(elSelector: string) {
  document
    .querySelectorAll(elSelector)
    .forEach(function (inp: HTMLInputElement) {
      inp.addEventListener("input", function () {
        inp.value = inp.value.replace(/\D/, "");
      });
    });
}

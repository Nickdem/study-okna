type TypeForm = {
  formValues: { [key: string]: string | number };
  resetFormValues: () => void;
  setFormValues: (key: string, value: string | number) => void;
};

function forms(formObj: TypeForm) {
  const formElms: NodeListOf<HTMLFormElement> =
      document.querySelectorAll(".base-form"),
    inputs: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".base-form input");

  const message = {
    load: "Ждём...",
    success: "Готово! Спасибо!",
    error: "Что-то пошло не так...",
  };

  async function postData() {
    (document.querySelector(".form__status") as HTMLSpanElement).innerText =
      message.load;
    return await delay(function () {
      return formObj.formValues;
    });
  }

  function getValues(elms: HTMLFormControlsCollection) {
    // const formData: undefined | { [key: string]: string } = {};
    Array.from(elms).forEach(function (
      el: HTMLButtonElement | HTMLInputElement
    ) {
      if (el.tagName == "INPUT") {
        formObj.setFormValues(el.name, el.value);
      }
    });
  }

  function resetInputs() {
    inputs.forEach(function (inp) {
      inp.value = "";
    });
  }

  formElms.forEach(function (item) {
    item.addEventListener("submit", function (e) {
      e.preventDefault();

      const statusMessage = document.createElement("span");
      statusMessage.classList.add("form__status");
      item.appendChild(statusMessage);

      getValues(item.elements);

      postData()
        .then(function (res) {
          console.log(res);
          statusMessage.innerText = message.success;
        })
        .catch(function () {
          statusMessage.innerText = message.error;
        })
        .finally(function () {
          resetInputs();
          formObj.resetFormValues();

          delay(function () {
            statusMessage.remove();
          }, 5000);
          if (item.parentElement.classList.contains("dialog__content")) {
            (
              item.parentElement.querySelector(
                ".dialog__close"
              ) as HTMLButtonElement
            ).click();
          }
        });
    });
  });
}

const delayTime = 1500;

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

type callBackFunction = () => any;

function delay(fn: callBackFunction, time?: number): Promise<string> {
  return new Promise(function (resolve) {
    return setTimeout(
      function () {
        return resolve(fn());
      },
      time ? time : getRandomInt(delayTime)
    );
  });
}

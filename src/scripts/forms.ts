function forms() {
  const formElms: NodeListOf<HTMLFormElement> =
      document.querySelectorAll(".base-form"),
    inputs: NodeListOf<HTMLInputElement> =
      document.querySelectorAll(".base-form input");

  const message = {
    load: "Ждём...",
    success: "Готово! Спасибо!",
    error: "Что-то пошло не так...",
  };

  document
    .querySelectorAll(".base-form input[name = 'user_phone']")
    .forEach(function (inp: HTMLInputElement) {
      inp.addEventListener("input", function () {
        inp.value = inp.value.replace(/\D/, "");
      });
    });

  async function postData(data: { [key: string]: string }) {
    (document.querySelector(".form__status") as HTMLSpanElement).innerText =
      message.load;
    return await delay(function () {
      return data;
    });
  }

  function getValues(elms: HTMLFormControlsCollection) {
    const formData: undefined | { [key: string]: string } = {};
    Array.from(elms).forEach(function (
      el: HTMLButtonElement | HTMLInputElement
    ) {
      if (el.tagName == "INPUT") {
        formData[el.name] = el.value;
      }
    });

    return formData;
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

      const formData = getValues(item.elements);

      postData(formData)
        .then(function (res) {
          console.log(res);
          statusMessage.innerText = message.success;
        })
        .catch(function () {
          statusMessage.innerText = message.error;
        })
        .finally(function () {
          resetInputs();
          delay(function () {
            statusMessage.remove();
          }, 5000);
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

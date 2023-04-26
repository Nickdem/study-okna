function modals() {
  function bindModal(
    triggerSelector: string,
    modalSelector: string,
    closeSelector: string
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal: HTMLDivElement = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

    trigger.forEach(function (item) {
      item.addEventListener("click", function (e) {
        if (e.target) {
          e.preventDefault();
        }
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
      });
    });

    close.addEventListener("click", function () {
      modal.style.display = "none";
      document.body.style.overflow = "";
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }
    });
  }

  function showModalWithTimeout(modalSelector: string, time: number) {
    setTimeout(function () {
      (document.querySelector(modalSelector) as HTMLDivElement).style.display =
        "block";
      document.body.style.overflow = "hidden";
    }, time);
  }

  bindModal(
    ".header__btn",
    ".dialog__engineer",
    ".dialog__engineer .dialog__close"
  );
  bindModal(".phone-link", ".dialog__call", ".dialog__call .dialog__close");

  showModalWithTimeout(".dialog__call", 60000);
}

function modals(resetValues: () => void) {
  function bindModal(
    triggerSelector: string,
    modalSelector: string,
    closeSelector: string
  ) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal: HTMLDivElement = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      scrollWidth = getScrollWidth();

    trigger.forEach(function (item) {
      item.addEventListener("click", function (e) {
        if (e.target) {
          e.preventDefault();
        }
        (
          document.querySelectorAll(".dialog") as NodeListOf<HTMLDivElement>
        ).forEach(function (item) {
          item.style.display = "none";
        });
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = scrollWidth + "px";
      });
    });

    close.addEventListener("click", function () {
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = 0 + "px";
      resetValues();
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = 0 + "px";
        resetValues();
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
  bindModal(".glazing__price button", ".calc1", ".calc1 .dialog__close");
  bindModal(".popup_calc2", ".calc2", ".calc2 .dialog__close");
  bindModal(".popup_calc3", ".calc3", ".calc3 .dialog__close");

  // showModalWithTimeout(".dialog__call", 60000);
}

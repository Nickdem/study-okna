function calculator(formObj: TypeForm) {
  const width = document.querySelectorAll("#width"),
    height = document.querySelectorAll("#height"),
    type = document.querySelectorAll(".form__select"),
    checkbox = document.querySelectorAll(".checkbox"),
    view = document.querySelectorAll(".form__icon");

  function bindActionToElems(
    event: string,
    elem: NodeListOf<Element>,
    prop: string
  ) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case "SPAN":
            formObj.setFormValues(prop, i);
            break;
          case "INPUT":
            if (item.getAttribute("type") === "checkbox") {
              i === 0
                ? formObj.setFormValues(prop, "Холодное")
                : formObj.setFormValues(prop, "Теплое");
              elem.forEach((box: HTMLInputElement, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            } else {
              formObj.setFormValues(prop, (item as HTMLInputElement).value);
            }
            break;
          case "SELECT":
            formObj.setFormValues(prop, (item as HTMLSelectElement).value);
            break;
        }

        console.log(formObj);
      });
    });
  }

  bindActionToElems("click", view, "view");
  bindActionToElems("input", height, "height");
  bindActionToElems("input", width, "width");
  bindActionToElems("change", type, "type");
  bindActionToElems("change", checkbox, "profile");
}

function images() {
  const gallery = document.querySelector(".works__gallery"),
    imgPopup = document.createElement("div"),
    popcupContent = document.createElement("div"),
    closeBtn = document.createElement("button"),
    imgEl = document.createElement("img"),
    scrollWidth = getScrollWidth();

  imgPopup.classList.add("dialog", "dialog__gallery");
  popcupContent.classList.add("dialog__content");
  closeBtn.innerText = "×";
  closeBtn.classList.add("dialog__close", "uppercase");
  popcupContent.appendChild(closeBtn);
  popcupContent.appendChild(imgEl);
  imgPopup.appendChild(popcupContent);
  gallery.appendChild(imgPopup);

  gallery.addEventListener("click", function (e) {
    if (e.target) {
      e.preventDefault();
    }

    const target = e.target;

    if ((target as HTMLImageElement).classList.contains("preview")) {
      imgPopup.style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = scrollWidth + "px";

      const path = (target as HTMLImageElement).parentElement.getAttribute(
        "href"
      );
      imgEl.setAttribute("src", path);
    }
  });

  closeBtn.addEventListener("click", function () {
    imgPopup.style.display = "none";
    document.body.style.overflow = "";
    document.body.style.marginRight = 0 + "px";
  });
}

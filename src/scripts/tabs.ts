function tabs(
  headerSelector: string,
  tabSelector: string,
  contentSelector: string,
  activeClass: string,
  attr: string
) {
  const header = document.querySelector(headerSelector),
    tabs: NodeListOf<HTMLLinkElement> = document.querySelectorAll(tabSelector),
    content: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(contentSelector);

  function hideContent() {
    tabs.forEach(function (item) {
      item.classList.remove(activeClass);
    });
    content.forEach(function (item) {
      item.style.display = "none";
    });
  }

  function showContent(idx = 0) {
    content[idx].style.display = "flex";
    tabs.forEach(function (item) {
      if (+item.getAttribute(attr) == idx) {
        console.log(idx);

        item.classList.add(activeClass);
      }
    });
  }
  hideContent();
  showContent();

  function getTargetItem(el: HTMLElement) {
    function replacer(str: string) {
      return str.replace(/\./, "");
    }

    const cls = replacer(tabSelector);

    if ((el.parentNode as HTMLDivElement).classList.contains(cls)) {
      return el.parentNode;
    }

    return el;
  }

  header.addEventListener("click", function (e) {
    const target = getTargetItem(e.target as HTMLElement);

    if (target) {
      tabs.forEach(function (item) {
        if (item == target) {
          hideContent();
          const n = (target as HTMLElement).getAttribute(attr);
          showContent(+n);
        }
      });
    }
  });
}

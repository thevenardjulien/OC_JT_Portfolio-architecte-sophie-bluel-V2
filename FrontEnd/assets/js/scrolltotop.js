export function scrollToTop(boolean) {
  if (boolean === true) {
    const body = document.querySelector("body");
    const iconDiv = document.createElement("div");
    iconDiv.classList.add("scroll-to-top");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-arrow-up");
    iconDiv.prepend(icon);
    body.prepend(iconDiv);
    listenToScroll();
    backToTopOnClick();
  }
}

function listenToScroll() {
  window.addEventListener("scroll", () => {
    const divScrollToTop = document.querySelector("div.scroll-to-top");
    console.log(window.scrollY);
    if (window.scrollY >= 500) {
      divScrollToTop.style.opacity = "1";
    } else {
      divScrollToTop.style.opacity = "0";
    }
  });
}

function backToTopOnClick() {
  const divScrollToTop = document.querySelector("div.scroll-to-top");
  divScrollToTop.addEventListener("click", (e) => {
    e.stopPropagation();
    window.scroll({ top: 0, behavior: "smooth" });
  });
}

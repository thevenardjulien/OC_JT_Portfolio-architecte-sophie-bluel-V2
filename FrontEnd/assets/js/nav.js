import { storedToken } from "./config.js";

const loginLink = document.querySelector(".link-log-in-out");
const loginList = document.querySelector(".li-log-in-out");

export function logInOutDisplay(boolean) {
  if (storedToken && boolean === true) {
    loginList.innerHTML = "déconnexion";
  }
}

export function logOut() {
  if (storedToken) {
    loginLink.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        loginList.innerHTML = "connexion";
      },
      { once: true }
    );
  }
}

export function activeNavLink(boolean) {
  if (boolean === true) {
    const navLinks = document.querySelectorAll("nav ul a");
    for (let navLink of navLinks) {
      if (window.location.href === `${navLink.href}`) {
        navLink.classList.add("nav-active");
      }
    }
  }
}

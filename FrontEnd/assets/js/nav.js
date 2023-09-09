import { storedToken } from "./config.js";

const navLinks = document.querySelectorAll("nav ul a");
const loginLink = document.querySelector(".link-log-in-out");
const loginList = document.querySelector(".li-log-in-out");

export function activeNavLinks() {
  for (let navLink of navLinks) {
    if (window.location.href === `${navLink.href}`) {
      navLink.classList.add("nav-active");
    }
  }
}

// Déconnexion ( Retrait du token & redirection )
loginLink.addEventListener("click", () => {
  if (storedToken) {
    localStorage.removeItem("token");
    window.location.replace("index.html");
  }
});

// Affichage - login / logout
export function displayLogin() {
  storedToken
    ? (loginList.innerHTML = "deconnexion")
    : (loginList.innerHTML = "connexion");
}

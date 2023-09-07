import { fetchLogin } from "./fetch.js";
const contactForm = document.querySelector("#contact form");

export function disableContactForm(boolean) {
  if (contactForm && boolean === true) {
    const contactFormSubmit = document.getElementById("contact-submit");
    contactFormSubmit.addEventListener("click", (event) => {
      event.preventDefault();
    });
    contactFormSubmit.addEventListener(
      "click",
      () => {
        const contactResponse = document.querySelector(".contact-response");
        const div = document.querySelector("div");
        div.innerHTML = "Formulaire temporairement désactivé.";
        div.classList.add("alert");
        contactResponse.append(div);
      },
      { once: true }
    );
  }
}

if (document.getElementById("login-form")) {
  const loginFormSubmit = document.getElementById("login-submit");
  const loginFormEmail = document.getElementById("email");
  const loginFormPassword = document.getElementById("password");

  loginFormSubmit.addEventListener("click", (e) => {
    if (loginFormEmail.reportValidity() && loginFormPassword.reportValidity()) {
      e.preventDefault();
      const email = loginFormEmail.value;
      const password = loginFormPassword.value;
      fetchLogin(email, password);
    }
  });
}

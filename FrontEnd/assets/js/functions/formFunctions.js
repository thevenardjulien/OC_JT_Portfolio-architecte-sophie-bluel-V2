import {
  contactForm,
  contactFormInputSubmit,
  divContactResponse,
} from "../forms.js";
import { validationBtn } from "../modals.js";

export function disableContactForm() {
  if (contactForm) {
    contactFormInputSubmit.addEventListener("click", (event) => {
      event.preventDefault();
    });
    contactFormInputSubmit.addEventListener(
      "click",
      () => {
        const p = document.querySelector("p");
        p.innerHTML = "Formulaire temporairement désactivé.";
        p.classList.add("alert");
        divContactResponse.append(p);
      },
      { once: true }
    );
  }
}

export function resetValidationButton() {
  validationBtn.style.backgroundColor = "#a7a7a7";
  validationBtn.style.cursor = "not-allowed";
}

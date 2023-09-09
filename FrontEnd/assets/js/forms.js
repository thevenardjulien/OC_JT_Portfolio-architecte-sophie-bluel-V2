import { fetchLogin } from "./fetch.js";
import { resetValidationButton } from "./functions/formFunctions.js";
import { postNewWork } from "./functions/modalsFunctions.js";
import { modalAddForm, validationBtn } from "./modals.js";

export const contactForm = document.querySelector("#contact form");
export const contactFormInputSubmit = document.getElementById("contact-submit");
export const divContactResponse = document.querySelector(".contact-response");

const loginForm = document.querySelector(".login form");
const loginFormInputSubmit = document.getElementById("login-submit");
const loginFormInputEmail = document.getElementById("email");
const loginFormInputPassword = document.getElementById("password");

const modalAddFormFile = document.getElementById("file");
const modalAddFormTitle = document.getElementById("title");
const modalAddFormCategory = document.getElementById("select");

// LOGIN FORM

export function enableLoginForm() {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  loginFormInputSubmit.addEventListener("click", () => {
    if (
      loginFormInputEmail.reportValidity() &&
      loginFormInputPassword.reportValidity()
    ) {
      const email = loginFormInputEmail.value;
      const password = loginFormInputPassword.value;
      fetchLogin(email, password);
    }
  });
}

// MODALADD FORM

export function modalAddFormValidity() {
  validationBtn.removeEventListener("click", handleValidationClick);
  modalAddForm.addEventListener("change", () => {
    if (
      modalAddFormFile.reportValidity() &&
      modalAddFormTitle.reportValidity() &&
      modalAddFormCategory.reportValidity()
    ) {
      validationBtn.style.backgroundColor = "#1d6154";
      validationBtn.style.cursor = "pointer";
      validationBtn.addEventListener("click", handleValidationClick);
    } else {
      validationBtn.style.backgroundColor = "#a7a7a7";
    }
  });
}


function handleValidationClick() {
  postNewWork();
  resetValidationButton();
}
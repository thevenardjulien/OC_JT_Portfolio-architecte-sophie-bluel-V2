import { modal, modalAdd, modalAddForm } from "../modals.js";
import { refreshGalleries } from "./galleryFunctions.js";

export function worksResponseError(message) {
  const divGalleryError = document.querySelector(".gallery-error");
  divGalleryError.classList.add("alert");
  divGalleryError.innerHTML = message;
}

export function loginResponseError(message) {
  const divLoginResponse = document.querySelector(".login-response");
  divLoginResponse.innerHTML = "";
  const p = document.createElement("p");
  p.classList.add("alert");
  p.innerHTML = message;
  divLoginResponse.append(p);
}

export function postResponse(message, boolean) {
  const p = document.createElement("p");
  p.innerHTML = message;
  modalAdd.append(p);
  boolean ? p.classList.add("info") : p.classList.add("alert");
  modalAddForm.reset();
  resetPlaceHolder();
  setTimeout(() => {
    p.innerHTML = "";
    returnToModal();
  }, 1000);
  refreshGalleries();
}

function resetPlaceHolder() {
  document.getElementById("placeholderImg").remove();
}

function returnToModal() {
  modalAdd.style.display = "none";
  modal.style.display = "block";
}

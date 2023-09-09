import { fetchWorks } from "./fetch.js";
import { deleteWork, generateModalWorks } from "./functions/modalsFunctions.js";

export const editBtn = document.querySelector(".edit");

export const modal = document.querySelector(".modal");
const modalXMark = document.querySelector(".modal-xmark");
export const modalGallery = document.querySelector(".modal-gallery");

export const modalAdd = document.querySelector(".modalAdd");
const modalAddXMark = document.querySelector(".modalAdd-xmark");
const modalAddArrowLeft = document.querySelector(".modalAdd-arrow-left");
const modalAddBtn = document.querySelector(".modal-gallery-options button");
export const modalAddForm = document.querySelector(".modalAdd Form");
export const validationBtn = document.getElementById("validation");
export const modalsBackground = document.querySelector(".modals-background");

export function enableModals() {
  document.addEventListener("click", () => {
    modal.style.display = "none";
    modalAdd.style.display = "none";
    modalsBackground.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  modalXMark.addEventListener("click", () => {
    modal.style.display = "none";
    modalsBackground.style.display = "none";
  });

  modalAdd.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  modalAddArrowLeft.addEventListener("click", () => {
    modal.style.display = "block";
    modalAdd.style.display = "none";
    modalsBackground.style.display = "block";
  });

  modalAddXMark.addEventListener("click", () => {
    modalAdd.style.display = "none";
    modalsBackground.style.display = "none";
  });

  modalAddBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalAdd.style.display = "block";
    modalsBackground.style.display = "block";
  });

  validationBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

export async function displayModalGallery() {
  try {
    const works = await fetchWorks();
    for (let work of works) {
      generateModalWorks(work, modalGallery);
    }
    deleteWork();
  } catch (error) {
    console.error(
      `Une erreur est survenue, impossible d'itérer sur les travaux`
    );
  }
}

import { storedToken } from "./config.js";
import { fetchDeleteWorks, fetchPostWorks, fetchWorks } from "./fetch.js";
import { displayGallery, gallery } from "./gallery.js";

const editBtn = document.querySelector(".edit");

const modal = document.querySelector(".modal");
const modalXMark = document.querySelector(".modal-xmark");
export const modalGallery = document.querySelector(".modal-gallery");

const modalAddBtn = document.querySelector(".modal-gallery-options button");
const modalAdd = document.querySelector(".modalAdd");
const modalAddXMark = document.querySelector(".modalAdd-xmark");
const modalAddArrowLeft = document.querySelector(".modalAdd-arrow-left");
const modalAddForm = document.querySelector(".modalAdd Form");
const validationBtn = document.getElementById("validation");

// MODALS EVENT

if (modal) {
  document.addEventListener("click", () => {
    modal.style.display = "none";
    modalAdd.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  modalXMark.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modalAdd.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  modalAddArrowLeft.addEventListener("click", () => {
    modal.style.display = "block";
    modalAdd.style.display = "none";
  });

  modalAddXMark.addEventListener("click", () => {
    modalAdd.style.display = "none";
  });

  modalAddBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalAdd.style.display = "block";
  });

  // SUBMIT WORK
  validationBtn.addEventListener("click", (e) => {
    e.preventDefault();
    postNewWork();
    modalAddForm.reset();
  });

  // DELETE WORK
  editBtn.addEventListener("click", () => {
    const modalThrashes = document.querySelectorAll(".modal-trash");
    for (let modalThrash of modalThrashes) {
      modalThrash.addEventListener("click", () => {
        fetchDeleteWorks(modalThrash.dataset.id);
        refreshModalGallery();
      });
    }
  });
}

// MODALS FUNC

export function editGallery(boolean) {
  if (gallery && storedToken && boolean === true) {
    editBtn.style.display = "flex";
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      modal.style.display = "block";
    });
  }
}

export async function displayModalGallery(boolean) {
  if (modalGallery && boolean === true) {
    try {
      const works = await fetchWorks();
      for (let work of works) {
        generateModalWorks(work, modalGallery);
      }
    } catch (error) {
      console.error(
        `Une erreur est survenue, impossible d'itérer sur les travaux`
      );
    }
  }
}

export function generateModalWorks(work, appendLocation) {
  const figure = document.createElement("figure");
  figure.dataset.id = work.id;

  const img = document.createElement("img");
  img.src = work.imageUrl;
  img.alt = work.title;

  const figcaption = document.createElement("figcaption");
  figcaption.textContent = "Éditer";
  figcaption.classList.add("p-top-5");

  const trash = document.createElement("i");
  trash.classList.add("modal-trash", "fa-solid", "fa-trash");
  trash.dataset.id = work.id;

  figure.append(img);
  figure.append(figcaption);
  figure.append(trash);
  appendLocation.append(figure);
}

function postNewWork() {
  const file = document.getElementById("file");
  const title = document.getElementById("title");
  const category = document.getElementById("select");

  const dataFile = file.files[0];
  const dataTitle = title.value;
  const dataCategory = category.selectedIndex;

  const formData = new FormData();

  formData.append("image", dataFile);
  formData.append("title", dataTitle);
  formData.append("category", dataCategory);

  fetchPostWorks(formData);
}

export function refreshGalleries() {
  modalGallery.innerHTML = "";
  displayModalGallery(true);
  gallery.innerHTML = "";
  displayGallery(true);
}

export function refreshModalGallery() {
  modalGallery.innerHTML = "";
  displayModalGallery(true);
}

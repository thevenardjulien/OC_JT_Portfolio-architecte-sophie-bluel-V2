import { displayGallery, gallery } from "../gallery.js";
import { displayModalGallery, modalGallery } from "../modals.js";
import { deleteWork } from "./modalsFunctions.js";

export function generateWork(work, appendLocation) {
  const div = document.createElement("div");
  div.dataset.category = work.categoryId;

  const figure = document.createElement("figure");
  figure.dataset.id = work.id;

  const img = document.createElement("img");
  img.src = work.imageUrl;
  img.alt = work.title;

  const figcaption = document.createElement("figcaption");
  figcaption.textContent = work.title;
  figcaption.classList.add("p-top-5");

  figure.append(img);
  figure.append(figcaption);
  div.append(figure);
  appendLocation.append(div);
}

export function refreshGalleries() {
  modalGallery.innerHTML = "";
  displayModalGallery(true);
  gallery.innerHTML = "";
  displayGallery(true);
}

export async function refreshModalGallery() {
  modalGallery.innerHTML = "";
  displayModalGallery(true);
  setTimeout(() => {
    deleteWork();
  }, 1000);
}

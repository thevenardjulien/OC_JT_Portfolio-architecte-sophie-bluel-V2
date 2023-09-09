import { storedToken } from "./config.js";
import { fetchWorks } from "./fetch.js";
import { generateWork } from "./functions/galleryFunctions.js";
import { editBtn, modal, modalsBackground } from "./modals.js";
export const gallery = document.querySelector(".gallery");

export async function displayGallery() {
  try {
    const works = await fetchWorks();
    for (let work of works) {
      generateWork(work, gallery);
    }
  } catch (error) {
    console.error(
      `Une erreur est survenue, impossible d'itérer sur les travaux`
    );
  }
}

export function editGalleryBtn() {
  if (storedToken) {
    editBtn.style.display = "flex";
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      modal.style.display = "block";
      modalsBackground.style.display = "block";
    });
  }
}

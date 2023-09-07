import { fetchWorks } from "./fetch.js";
export const gallery = document.querySelector(".gallery");

export async function displayGallery(boolean) {
  if (gallery && boolean === true) {
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
}

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

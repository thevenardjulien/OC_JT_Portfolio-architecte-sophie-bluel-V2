import { fetchDeleteWorks, fetchPostWorks } from "../fetch.js";
import { refreshGalleries } from "./galleryFunctions.js";

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

export function postNewWork() {
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

export function deleteWork() {
  let modalTrashes = document.querySelectorAll(".modal-trash");
  for (let modalTrash of modalTrashes) {
    let dataId = modalTrash.dataset.id;
    modalTrash.addEventListener("click", async () => {
      if (confirm("Êtes-vous sur de vouloir supprimer cet élément ?")) {
        fetchDeleteWorks(dataId);
        refreshGalleries();
      }
    });
  }
}

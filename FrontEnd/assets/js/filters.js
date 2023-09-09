import { filterGalleryFigures } from "./functions/filtersFunctions.js";
export const filtersBtns = document.querySelectorAll(".filters button");
const filterBtnAll = document.querySelector(".btn-all");
const filterBtnObjects = document.querySelector(".btn-objects");
const filterBtnApartments = document.querySelector(".btn-apartments");
const filterBtnHotels = document.querySelector(".btn-hotels");

export function filterGallery() {
  filterBtnAll.addEventListener("click", () => {
    filterGalleryFigures(true);
  });

  filterBtnObjects.addEventListener("click", () => {
    filterGalleryFigures(false, 1);
  });

  filterBtnApartments.addEventListener("click", () => {
    filterGalleryFigures(false, 2);
  });

  filterBtnHotels.addEventListener("click", () => {
    filterGalleryFigures(false, 3);
  });
}

export function toggleActiveFilters() {
  for (let filterBtn of filtersBtns) {
    filterBtn.addEventListener("click", () => {
      document
        .querySelector(".active-filter")
        .classList.remove("active-filter");
      filterBtn.classList.add("active-filter");
    });
  }
}

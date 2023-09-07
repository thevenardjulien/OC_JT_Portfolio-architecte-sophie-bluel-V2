import { gallery } from "./gallery.js";
const filtersBtns = document.querySelectorAll(".filters button");
const filterBtnAll = document.querySelector(".btn-all");
const filterBtnObjects = document.querySelector(".btn-objects");
const filterBtnApartments = document.querySelector(".btn-apartments");
const filterBtnHotels = document.querySelector(".btn-hotels");

export function toggleActiveFilters(boolean) {
  if (boolean === true) {
    for (let filterBtn of filtersBtns) {
      filterBtn.addEventListener("click", () => {
        document
          .querySelector(".active-filter")
          .classList.remove("active-filter");
        filterBtn.classList.add("active-filter");
      });
    }
  } else {
    document.querySelector(".active-filter").classList.remove("active-filter");
  }
}

if (gallery) {
  filterBtnAll.addEventListener("click", () => {
    displayFigures(true);
  });

  filterBtnObjects.addEventListener("click", () => {
    displayFigures(false, 1);
  });

  filterBtnApartments.addEventListener("click", () => {
    displayFigures(false, 2);
  });

  filterBtnHotels.addEventListener("click", () => {
    displayFigures(false, 3);
  });
}

/**
 *
 * @param {boolean} boolean
 * @param {Number} category
 * First, add a bolean, true will display all figures, false will hide all figures
 * If you decide to hide all figures, you can add a specific category with thoses numbers :
 * 1 - Objects, 2 - Apartments, 3 - Hotels
 */
function displayFigures(boolean, category) {
  const galleryFigures = document.querySelectorAll(".gallery > div");
  for (let galleryFigure of galleryFigures) {
    galleryFigure.style.display = `${boolean ? "block" : "none"}`;
  }
  const selectedCategoryFigures = document.querySelectorAll(
    `.gallery > div[data-category="${category}"]`
  );
  for (let selectedCategoryFigure of selectedCategoryFigures) {
    selectedCategoryFigure.style.display = "block";
  }
}

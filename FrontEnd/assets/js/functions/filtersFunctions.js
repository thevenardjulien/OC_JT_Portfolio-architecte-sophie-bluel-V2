/**
 *
 * @param {boolean} boolean
 * @param {Number} category
 * First, add a bolean, true will display all figures, false will hide all figures
 * If you decide to hide all figures, you can add a specific category with thoses numbers :
 * 1 - Objects, 2 - Apartments, 3 - Hotels
 */
export function filterGalleryFigures(boolean, category) {
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

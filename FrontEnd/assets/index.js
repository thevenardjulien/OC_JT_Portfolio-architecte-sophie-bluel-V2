import { filterGallery, toggleActiveFilters } from "./js/filters.js";
import { modalAddFormValidity } from "./js/forms.js";
import { disableContactForm } from "./js/functions/formFunctions.js";
import { displayGallery, editGalleryBtn } from "./js/gallery.js";
import { displayModalGallery, enableModals } from "./js/modals.js";
import { editPlaceHolder } from "./js/placeholder.js";

// Filters
filterGallery();
toggleActiveFilters();

// Gallery
displayGallery();
editGalleryBtn();

// Modals
enableModals();
displayModalGallery();
editPlaceHolder();
modalAddFormValidity();

// Contact Form
disableContactForm();

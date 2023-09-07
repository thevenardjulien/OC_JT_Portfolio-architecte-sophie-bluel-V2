import { toggleActiveFilters } from "./js/filters.js";
import { disableContactForm } from "./js/forms.js";
import { displayGallery } from "./js/gallery.js";
import { displayModalGallery, editGallery } from "./js/modals.js";
import { activeNavLink, logInOutDisplay, logOut } from "./js/nav.js";
import { editPlaceHolder } from "./js/placeholder.js";
import { scrollToTop } from "./js/scrolltotop.js";
import { titleObs } from "./js/titlesObservers.js";

// NAV
activeNavLink(true);
logInOutDisplay(true);
logOut();

// FILTERS
toggleActiveFilters(true);

// GALLERY
displayGallery(true);
editGallery(true);

// MODALS
displayModalGallery(true);
editPlaceHolder(true);

// CONTACT FORM
disableContactForm(true);

// TITLES OBSERVERS
titleObs(true);

// FOOTER
scrollToTop(true);



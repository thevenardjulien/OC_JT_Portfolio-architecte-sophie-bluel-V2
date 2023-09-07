import { localhost, storedToken } from "./config.js";
import { refreshGalleries, refreshModalGallery } from "./modals.js";

export async function fetchWorks() {
  try {
    const response = await fetch(`${localhost}/api/works`, {
      headers: {
        Accept: "Application/json",
      },
    });
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Une erreur inattendue s'est produite");
    }
  } catch (error) {
    worksResponseError(
      "Oops, Une erreur inattendue s'est produite et il ne nous est pas possible de charger la galerie..."
    );
    console.error(
      `Impossible de récupérer les données des travaux auprès de l'API`
    );
  }
}

function worksResponseError(message) {
  const div = document.querySelector(".gallery-error");
  console.log(div);
  div.classList.add("alert");
  div.innerHTML = message;
}

export async function fetchLogin(email, password) {
  try {
    const response = await fetch(`${localhost}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseLogin = await response.json();

    if (response.ok) {
      localStorage.setItem("token", responseLogin.token);
      window.location.replace("index.html");
    } else if (response.status === 401) {
      console.error("E-mail ou mot de passe incorrect. (401)");
      loginResponseError("E-mail ou mot de passe incorrect.");
    } else if (response.status === 404) {
      console.error("Utilisateur introuvable. (404)");
      loginResponseError("Utilisateur introuvable.");
    }
  } catch (error) {
    console.error("Impossible de se connecter.");
    loginResponseError("Impossible de se connecter.");
  }
}

function loginResponseError(message) {
  const div = document.querySelector(".login-response");
  div.innerHTML = "";
  const p = document.createElement("p");
  p.classList.add("alert");
  p.innerHTML = message;
  div.append(p);
}

export async function fetchPostWorks(formData) {
  try {
    const response = await fetch(`${localhost}/api/works`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${storedToken}`,
        Accept: "Application/json",
      },
      body: formData,
    });
    if (response.ok) {
      console.log("Projet correctement ajouté !");
      postResponse("Projet correctement ajouté !", true);
    } else if (response.status === 400) {
      console.error("La requête a échouée.");
      postResponse("La requête a échouée", false);
    } else if (response.status === 401) {
      console.error("Requête non autorisée.");
      postResponse("Requête non autorisée.", false);
    } else if (response.status === 500) {
      console.error("Oops, désolé, une erreur inattendue est survenue!");
      postResponse("Oops, désolé, une erreur inattendue est survenue!", false);
    }
  } catch (error) {
    console.error("Erreur: " + error.message);
  }
}

function postResponse(message, boolean) {
  const modalAdd = document.querySelector(".modalAdd");
  const p = document.createElement("p");
  p.innerHTML = message;
  modalAdd.append(p);
  if (boolean === true) {
    p.classList.add("info");
  } else if (boolean === false) {
    p.classList.add("alert");
  }
  setTimeout(() => {
    returnToModal();
  }, 1500);
  refreshGalleries();
}

function returnToModal() {
  const modal = document.querySelector(".modal");
  const modalAdd = document.querySelector(".modalAdd");
  modalAdd.style.display = "none";
  modal.style.display = "block";
}

export async function fetchDeleteWorks(id) {
  try {
    const response = fetch(`${localhost}/api/works/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "Application/json",
        Authorization: `Bearer ${storedToken}`,
      },
      body: id,
    });
    if (response.ok || response.status === 204) {
      console.log("L'élément a bien été supprimé !");
      // deleteResponse("L'élément a bien été supprimé !", true);
    } else if (response.status === 401) {
      console.log("Requête non autorisée.");
      // deleteResponse(`Requête non autorisée.`, false);
    } else if (response.status === 500) {
      console.log("Oops, désolé, une erreur inattendue est survenue!");
      // deleteResponse(
      //   "Oops, désolé, une erreur inattendue est survenue!",
      //   false
      // );
    }
  } catch (error) {
    console.error("Erreur: " + error.message);
  }
}

// function deleteResponse(message, boolean) {
//   const modalResponse = document.querySelector(".modal-gallery-options");
//   console.log(modalResponse);
//   const p = document.createElement("p");
//   p.innerHTML = message;
//   console.log(p);
//   modalResponse.prepend(p);
//   if (boolean === true) {
//     p.classList.add("info");
//   } else if (boolean === false) {
//     p.classList.add("alert");
//   }
//   console.log(p);
//   refreshModalGallery();
// }

import { localhost, storedToken } from "./config.js";
import {
  loginResponseError,
  postResponse,
  worksResponseError,
} from "./functions/fetchFunctions.js";

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
      console.error("Erreur dans l'identifiant ou le mot de passe (401)");
      loginResponseError("Erreur dans l'identifiant ou le mot de passe");
    } else if (response.status === 404) {
      console.error("Utilisateur introuvable. (404)");
      loginResponseError("Utilisateur introuvable.");
    }
  } catch (error) {
    console.error("Impossible de se connecter.");
    loginResponseError("Impossible de se connecter.");
  }
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
    if (response.ok) {
      console.log("L'élément a bien été supprimé !");
    } else if (response.status === 401) {
      console.log("Requête non autorisée.");
    } else if (response.status === 500) {
      console.log("Une erreur inattendue est survenue!");
    }
  } catch (error) {
    console.error("Erreur: " + error.message);
  }
}

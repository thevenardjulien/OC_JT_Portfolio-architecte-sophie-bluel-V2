export const placeHolder = document.querySelector(".div-placeholder");
const file = document.getElementById("file");

export async function editPlaceHolder() {
  file.addEventListener("change", () => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file.files[0]);
    img.alt = file.files[0].name;
    img.id = "placeholderImg";
    img.classList.add("placeHolderUploadedImg");
    placeHolder.append(img);
  });
}

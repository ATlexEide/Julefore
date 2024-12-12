// import { displayFamilies } from "./js/displayFamilies";
const createFamilyBtn = document.getElementById("create-family-btn");
const actionDialog = document.getElementById("select-action-menu");
createFamilyBtn.addEventListener("click", () => {
  actionDialog.showModal();
});

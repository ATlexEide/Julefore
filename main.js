// import { displayFamilies } from "./js/displayFamilies";
const createFamilyBtn = document.getElementById("family-action-btn");
const actionDialog = document.getElementById("select-action-menu");
createFamilyBtn.addEventListener("click", () => {
  actionDialog.showModal();
});
const createFamilyBtn = document.getElementById("create-family-btn");
const deleteFamilyBtn = document.getElementById("delete-family-btn");

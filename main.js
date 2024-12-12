// import { displayFamilies } from "./js/displayFamilies";
const openDialogBtn = document.getElementById("family-action-btn");
const actionDialog = document.getElementById("select-action-menu");
const createFamilyDialog = document.getElementById("create-family-dialog");
const deleteFamilyDialog = document.getElementById("delete-family-dialog");
openDialogBtn.addEventListener("click", () => {
  actionDialog.showModal();
});
const createFamilyBtn = document.getElementById("create-family-btn");
createFamilyBtn.addEventListener("click", () => {
  actionDialog.close();
  createFamilyDialog.showModal();
});
const deleteFamilyBtn = document.getElementById("delete-family-btn");
deleteFamilyBtn.addEventListener("click", () => {
  console.log("yippeeeee");
  actionDialog.close();
  deleteFamilyDialog.showModal();
});

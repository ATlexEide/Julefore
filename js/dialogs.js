export function addDialogButtonListeners(document) {
  const openDialogBtn = document.getElementById("family-action-btn");
  const actionDialog = document.getElementById("select-action-menu");
  const createFamilyDialog = document.getElementById("create-family-dialog");
  const deleteFamilyDialog = document.getElementById("delete-family-dialog");
  const createFamilyBtn = document.getElementById("create-family-btn");
  const deleteFamilyBtn = document.getElementById("delete-family-btn");

  openDialogBtn.addEventListener("click", () => {
    actionDialog.showModal();
  });
  createFamilyBtn.addEventListener("click", () => {
    actionDialog.close();
    createFamilyDialog.showModal();
  });
  deleteFamilyBtn.addEventListener("click", () => {
    console.log("yippeeeee");
    actionDialog.close();
    deleteFamilyDialog.showModal();
  });
}

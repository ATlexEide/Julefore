const families = await getFamilies();
async function getFamilies() {
  try {
    const req = await fetch("/api/data/families.json");
    const res = await req.json();
    return res;
  } catch (error) {
    throw new Error(error);
  }
}
const selectMenu = document.getElementById("select-family");
families.forEach((fam) => {
  const option = document.createElement("option");
  option.value = fam.id;
  option.textContent = fam.title;
  selectMenu.appendChild(option);
});

const deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!selectMenu.value) throw new Error("No family selected");
  sendDeleteReq(selectMenu.value);
  document.getElementById("delete-family-dialog").close();
});
async function sendDeleteReq(family) {
  try {
    const req = await fetch(`http://localhost:8080/families/${family}/delete`, {
      method: "DELETE",
    });
    const res = await req.json();
  } catch (error) {
    throw new Error(error);
  }
}

const families = await getFamilies();
async function getFamilies() {
  try {
    const req = await fetch("/api/data/families.json");
    const res = await req.json();
    return res;
  } catch (error) {
    console.log(error);
  }
}
console.log(families[families.length - 1]);
const selectMenu = document.getElementById("select-family");
families.forEach((fam) => {
  const option = document.createElement("option");
  option.value = fam.id;
  option.textContent = fam.title;
  selectMenu.appendChild(option);
});

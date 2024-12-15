export async function fetchFamilies() {
  try {
    const req = await fetch("/api/data/families.json");
    const res = await req.json();
    return res;
  } catch (error) {}
}
const dialog = document.getElementById("family-dialog");
const familyPicture = document.getElementById("family-picture");
const residentsIcon = document.getElementById("icon-residents");
const giftsIcon = document.getElementById("icon-gifts");
const foodIcon = document.getElementById("icon-food");
const alcoholIcon = document.getElementById("icon-alcohol");
export function displayFamilies(families) {
  console.log("display: ", families);
  const familyList = document.getElementById("two");
  familyList.textContent = "";
  if (!families) return;
  families.forEach((family) => {
    const article = document.createElement("article");
    article.classList.add("family-card");
    article.addEventListener("click", () => {
      familyPicture.src = family.image;
      familyPicture.alt = `bilde av ${family.title}`;
      residentsIcon.textContent = " " + family.preferences.residents;
      giftsIcon.textContent = family.preferences.gifts
        ? " Har gaver"
        : " Har ikke gaver";
      foodIcon.textContent = family.preferences.food;
      alcoholIcon.textContent = family.preferences.alcohol ? " Ja" : " Nei";
      dialog.showModal();
    });

    const figure = document.createElement("figure");
    figure.classList.add("figure-card");
    const img = document.createElement("img");
    img.classList.add("image");
    img.src = family.image;
    figure.appendChild(img);
    article.appendChild(figure);
    const h3 = document.createElement("h3");
    h3.classList.add("title-card");
    h3.textContent = family.title;
    article.appendChild(h3);
    familyList.appendChild(article);
  });
}
//const familySelect = document.querySelector("");

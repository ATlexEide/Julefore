export async function fetchFamilies() {
  try {
    const req = await fetch("/api/data/families.json");
    const res = await req.json();
    return res;
  } catch (error) {}
}

export function displayFamilies(families) {
  console.log("display: ", families);
  const familyList = document.getElementById("two");
  familyList.textContent = "";
  if (!families) return;
  families.forEach((family) => {
    const article = document.createElement("article");
    article.classList.add("family-card");

    const figure = document.createElement("figure");
    figure.classList.add("figure-card");
    const img = document.createElement("img");
    img.classList.add("image");
    //img.src = family.image;
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

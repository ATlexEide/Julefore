const inputs = document.getElementsByTagName("input");
const applyBtn = document.getElementById("apply-filter-btn");
applyBtn.addEventListener("click", () => {
  let filter = "?";
  for (const input of inputs) {
    if (input.checked) filter += `&${input.name}=${input.value}`;
  }
  // TODO: UPDATE AND DISPLAY FAMILIES
  let filteredFamilies = sendGetFilterReq(filter);
});

async function sendGetFilterReq(filter) {
  try {
    const req = await fetch(
      `http://localhost:8080/families/filter/preferences?${filter}`
    );
    const res = await req.json();
    return res;
  } catch (error) {}
}

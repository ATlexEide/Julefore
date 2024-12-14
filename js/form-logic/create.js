const form = document.getElementById("create-family-form");
const specifyOtherFoodRadio = document.getElementById("option-other");
const specifyOtherFoodInput = document.getElementById("input-option-other");
specifyOtherFoodRadio.value = specifyOtherFoodInput.value;
const radioMenu = document.getElementById("radio-menu");
const hasPetInput = document.getElementById("option-pets");
const petListInput = document.getElementById("input-option-pets");
const submitBtn = document.getElementById("submit-btn");
radioMenu.addEventListener("click", () => {
  if (specifyOtherFoodRadio.checked) {
    specifyOtherFoodInput.removeAttribute("hidden");
    specifyOtherFoodInput.removeAttribute("disabled");
    specifyOtherFoodInput.setAttribute("required", "");
  } else {
    specifyOtherFoodInput.setAttribute("hidden", "");
    specifyOtherFoodInput.setAttribute("disabled", "");
    petListInput.removeAttribute("required");
  }
});
hasPetInput.addEventListener("click", () => {
  if (hasPetInput.checked) {
    petListInput.removeAttribute("hidden");
    petListInput.removeAttribute("disabled");
    specifyOtherFoodInput.setAttribute("required", "");
  } else {
    petListInput.setAttribute("hidden", "");
    petListInput.setAttribute("disabled", "");
    petListInput.removeAttribute("required");
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const family = {
    title: document.getElementById("create-family-name").value,
    image:
      "https://api.deepai.org/job-view-file/3d316b13-7817-4b01-bc35-f6274b8d7aa7/outputs/output.jpg?art-image=true",
    description: document.getElementById("create-description").value,
    preferences: {
      residents: Number(document.getElementById("create-residents").value),
      food: document.getElementById("option-pinnekjøtt").checked
        ? "pinnekjøtt"
        : document.getElementById("option-ribbe").checked
        ? "ribbe"
        : specifyOtherFoodInput.value,
      alcohol: document.getElementById("option-alcohol").checked ? true : false,
      allergy_friendly: document.getElementById("option-allergy-friendly")
        .checked
        ? true
        : false,
      pets: {
        hasPets: document.getElementById("option-pets").checked ? true : false,
        species: hasPetInput.checked ? petListInput.value.split(",") : [],
      },
      gifts: document.getElementById("option-gifts").checked ? true : false,
    },
  };
  sendPostReq(family);
  document.getElementById("create-family-dialog").close();
});

async function sendPostReq(family) {
  try {
    const json = JSON.stringify(family);
    const req = await fetch("http://localhost:8080/families/create", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: json,
    });
    const res = await req.json();
  } catch (error) {
    throw new Error(error);
  }
}

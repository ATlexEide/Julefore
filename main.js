// import { displayFamilies } from "./js/displayFamilies";
import { addDialogButtonListeners } from "./js/dialogs.js";
(() => {
  console.warn(
    "PLEASE MAKE SURE API IS RUNNING BY RUNNING 'node api/main.js' IN ROOT"
  );
  addDialogButtonListeners(document);
})();

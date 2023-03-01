const listaSpesa = [
  "pane",
  "latte",
  "uova",
  "formaggio",
  "frutta",
  "verdura",
  "riso",
  "pasta",
  "tonno",
  "fagioli",
  "carne",
  "pesce",
  "yogurt",
  "burro",
  "marmellata",
  "biscotti",
  "cioccolato",
  "detersivo",
  "carta igienica",
  "mandorle",
];

let counter = 0;

const tBodyEl = document.querySelector("tbody");
console.log(tBodyEl);

while (counter < listaSpesa.length) {
  let tREl = document.createElement("tr");
  tBodyEl.append(tREl);
  let tHEl = document.createElement("th");
  tHEl.scope = "row";
  tHEl.classList.add("px-4", "fw-medium", "fs-3");
  tHEl.innerHTML = `${counter + 1}. ${listaSpesa[counter]}`;
  tREl.append(tHEl);
  console.log(listaSpesa[counter]);
  counter++;
}

// creo un array con gli elementi della lista
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

// inizializzo un counter a 0
let counter = 0;

// seleziono il body della table di BS
const tBodyEl = document.querySelector("tbody");
console.log(tBodyEl);

// inizializzo le variabili associate a th (table header) e tr (table row)
let tREl;
let tHEl;

while (counter < listaSpesa.length) {
  // creo un elemento tr
  tREl = document.createElement("tr");
  // lo appendo al table body
  tBodyEl.append(tREl);
  // creo un elemento th
  tHEl = document.createElement("th");
  // gli assegno lo scope 'row' per seguire i canoni di BS
  tHEl.scope = "row";
  // modifico la classe del mio elemento th in base alle mie preferenze
  tHEl.classList.add("px-4", "fw-medium", "fs-3");
  // aggiungo un testo all'interno di th in relazione al counter e agli elementi nel mio array 'lista della spesa'
  tHEl.innerHTML = `${counter + 1}. ${listaSpesa[counter]}`;
  // appendo i miei elementi th agli elementi tr
  tREl.append(tHEl);
  console.log(listaSpesa[counter]);
  // aumento il contatore di 1 ogni volta per non incappare in un ciclo while infinito
  counter++;
}

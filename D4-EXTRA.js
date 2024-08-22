// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(lenght) {
  let array = [];
  lenght = 15;
  for (let i = 0; i < lenght; i++) {
    array.push(Math.floor(Math.random() * 11));
  }
  console.log(array);
  return array;
}
// console.log(giveMeRandom());
const array = giveMeRandom();
function checkArray(param = array) {
  console.log(param);
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    if (param[i] > 5) {
      console.log(param[i], " maggiore di 5");
      sum += param[i];
    } else {
      console.log(param[i], " minore di 5");
    }
  }
  console.log(sum);
}
checkArray();

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
  {
    price: 100,
    name: "tavolo",
    id: 1,
    quantity: 2,
  },
  {
    price: 180,
    name: "sedia",
    id: 2,
    quantity: 10,
  },
  {
    price: 80,
    name: "poltrona",
    id: 3,
    quantity: 4,
  },
];

const shoppingCartTotal = function (sc = shoppingCart) {
  let totP = 0;
  for (let i = 0; i < sc.length; i++) {
    totP += sc[i].price * sc[i].quantity;
  }
  console.log(totP);
};
shoppingCartTotal();

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const magazzino = [
  {
    price: 100,
    name: "tavolo",
    id: 1,
    quantity: 4,
  },
  {
    price: 80,
    name: "sedia",
    id: 2,
    quantity: 7,
  },
  {
    price: 180,
    name: "poltrona",
    id: 3,
    quantity: 3,
  },
];

const addToShoppingCart = function (sc = shoppingCart, mag = magazzino) {
  for (let i = 0; i < sc.length; i++) {
    for (let j = 0; j < mag.length; j++) {
      if (sc[i].name === mag[j].name) {
        sc[i].quantity += mag[j].quantity;
      }
    }
  }
  console.log(sc);
};
addToShoppingCart();

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const maxShoppingCart = function (sc = shoppingCart) {
  let p;
  for (let i = 0; i < sc.length; i++) {
    for (let j = 0; j < sc.length; j++)
      if (sc[i].price > sc[j].price) {
        p = sc[i];
      }
  }
  console.log(p);
};
maxShoppingCart();

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const latestShoppingCart = function (sc = shoppingCart) {
  return sc[sc.length - 1];
};
console.log(latestShoppingCart());

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const x = 5;
let operationCount = 0;
let iteration = 0;
const loopUntil = function (param = x) {
  while (operationCount < 4) {
    let randomN = Math.floor(Math.random() * 10);

    if (randomN > param) {
      operationCount++;
    } else {
      operationCount = 0;
    }
    iteration++;
  }
  console.log("complimenti, sei riuscito a fare 3 strike consecutivi in soli " + iteration + " iterazioni");
};

loopUntil();

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

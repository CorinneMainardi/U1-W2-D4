/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  const areaR = l1 * l2;
  return areaR;
}
console.log(area(3, 2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
  let sum = num1 + num2;
  if (num1 === num2) {
    sum = (num1 + num2) * 3;
  }
  return sum;
}
console.log(crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num) {
  let diff = Math.abs(num - 19);
  if (num > 19) {
    diff = (num - 19) * 3;
  }
  return diff;
}
console.log(crazyDiff(5));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if ((n > 20 && n < 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary());

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(string = "ciao") {
  if (string.toUpperCase().startsWith("EPICODE")) {
    return string;
  } else {
    const string2 = "EPICODE " + string.toUpperCase();
    return string2;
  }
}
console.log(epify());

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(num) {
  num > 0;
  if (num % 3 === 0) {
    return num + " è multiplo di di 3";
  } else if (num % 7 === 0) {
    return num + " è multiplo  di 7";
  } else {
    return num + " non è multiplo di 3 o di 7";
  }
}
console.log(check3and7(20));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(string = "supercalifragilistichespiralidoso") {
  const revS = string.split("").reverse().join("");
  return revS;
}
console.log(reverseString());

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string = "il cane dorme sul letto") {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(upperFirst());

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(string = "vorrei andare al mare") {
  let string2 = string.slice(1, -1);
  return string2;
}
console.log(cutString());

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(lenght) {
  let arrayN = [];
  lenght = 15;
  for (let i = 0; i < lenght; i++) {
    arrayN.push(Math.floor(Math.random() * 11));
  }
  return arrayN;
}
console.log(giveMeRandom());

/*
Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).

La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”.
*/

//Creo l'array e variabili
let listaAnimali = ["Leone", "Lupo"];

let numeroA = 1;
let numeroB = 2;

console.log(pushingElements(listaAnimali, numeroA, numeroB));

//Creo la funzione
function pushingElements(lista, a, b) {

    if (a < b && b <= listaAnimali.length) {

        lista.push(a)
        lista.push(b)
    
    }

    return listaAnimali

}
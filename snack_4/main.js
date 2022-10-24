/* 
Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro

es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/


//Creo gli array
let listaNumeri =[1,2,3,4,5,6];
let listaCandidati = ["Manuel", "Lucia", "Antonio", "Marco", "Giulia", "Pasquale"];
let listaTelefoni = ["iphone", "Peraphone"];

//Funzione che fonde gli array
let listaUnita = [];

for (let i = 0; i < listaNumeri.length; i++) {

    if (listaNumeri.length == listaCandidati.length) {
    
        listaUnita = listaNumeri.concat(listaCandidati)
    
    } else if (listaNumeri.length == listaTelefoni.length) {
    
        listaUnita = listaNumeri.concat(listaTelefoni)
    
    } else if (listaCandidati.length == listaTelefoni.length) {
    
        listaUnita = listaCandidati.concat(listaTelefoni)
    
    } 

}

console.log(listaUnita);
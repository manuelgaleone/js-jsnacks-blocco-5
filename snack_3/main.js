/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

//Scrivo la parola
let parola = prompt("Dammi una parola!");

let parolaContrario = contrarioParola(parola);
console.log(parolaContrario);

//Funzione che gira la parola
function contrarioParola(parola) {

    let contrario = "";

    for (let i = parola.length - 1; i >= 0; i--) {
        
        contrario += parola[i];
    
    }

    return contrario;

}

/*
Crea 10 oggetti che rappresentano una zucchina.

Dividi in due array separati le zucchine che misurano meno o più di 15cm.

Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

//Creo la lista di Zucchine
let zucchine = [
    {
        varieta: "Zucchina Mario",
        kg: 17,
        cm: 14
    },
    {
        varieta: "Zucchina Antonio",
        kg: 22,
        cm: 19
    },
    {
        varieta: "Zucchina Mauro",
        kg: 12,
        cm: 12
    },
    {
        varieta: "Zucchina Giovanni",
        kg: 2,
        cm: 19
    },
    {
        varieta: "Zucchina Alpi",
        kg: 12,
        cm: 7
    },
    {
        varieta: "Zucchina Andrea",
        kg: 3,
        cm: 8
    },
    { 
        varieta: "Zucchina Paolo",
        kg: 5,
        cm: 29
    },
    {
        varieta: "Zucchina Manuel",
        kg: 18, 
        cm: 21
    },
    {
        varieta: "Zucchina Pasquale",
        kg: 12,
        cm: 10
    },
    {
        varieta: "Zucchina Lucia",
        kg: 7,
        cm: 13
    }
];

//Creo le liste vuote
let zucchineMeno15 = [];
let zucchinePiu15 = []; 

//Divido le zucchine e pusho nelle rispettive liste
zucchine.forEach(zucchina => {

    if (zucchina.cm < 15) {
        zucchineMeno15.push(zucchina)
    } else if (zucchina.cm > 15) {
        zucchinePiu15.push(zucchina)
    }
    
});

console.log(zucchineMeno15);
console.log(zucchinePiu15);

//Calcolo il kg dei due gruppi
let sommaMeno = 0;

zucchineMeno15.forEach(zucchina => {

    sommaMeno += zucchina.kg;

});

console.log(sommaMeno);

let sommaPiu = 0;

zucchinePiu15.forEach(zucchina => {

    sommaPiu += zucchina.kg;

});

console.log(sommaPiu);
/*
Crea 10 oggetti che rappresentano una zucchina.

Dividi in due array separati le zucchine che misurano meno o più di 15cm.

Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

//Creo la lista di Zucchine
let zucchine = [
    {
        varieta: "Zucchina Mario",
        kg: 10,
        lunghezza: Number("25") + " " + "cm"
    },
    {
        varieta: "Zucchina Antonio",
        kg: 12,
        lunghezza: Number("20") + " " + "cm"
    },
    {
        varieta: "Zucchina Mauro",
        kg: 12,
        lunghezza: Number("18") + " " + "cm"
    },
    {
        varieta: "Zucchina Giovanni",
        kg: 2,
        lunghezza: Number("29") + " " + "cm"
    },
    {
        varieta: "Zucchina Alpi",
        kg: 12,
        lunghezza: Number("20") + " " + "cm"
    },
    {
        varieta: "Zucchina Andrea",
        kg: 3,
        lunghezza: Number("19") + " " + "cm"
    },
    { 
        varieta: "Zucchina Paolo",
        kg: 5,
        lunghezza: Number("25") + " " + "cm"
    },
    {
        varieta: "Zucchina Manuel",
        kg: 8, 
        lunghezza: Number("20") + " " + "cm"
    },
    {
        varieta: "Zucchina Pasquale",
        kg: 12,
        lunghezza: Number("5") + " " + "cm"
    },
    {
        varieta: "Zucchina Lucia",
        kg: 7,
        lunghezza: Number("2") + " " + "cm"
    }
];

//Creo le liste vuote
let zucchineMeno15 = [];
let zucchinePiu15 = []; 

//Divido le zucchine e pusho nelle rispettive liste
zucchine.forEach(element => {
    
    if (zucchine.kg < 15) {
        zucchineMeno15.push(element)
    } else if (zucchine.kg > 15) {
        zucchinePiu15.push(element)
    }

});

console.log(zucchineMeno15);
console.log(zucchinePiu15);
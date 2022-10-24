/*
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, kg e lunghezza.

Calcola quanto pesano tutte le zucchine.
*/

//Creo la lista di Zucchine
let zucchine = [
    {
        varietà: "Zucchina Mario",
        kg: 10,
        lunghezza: Number("25") + " " + "cm"
    },
    {
        varietà: "Zucchina Antonio",
        kg: 12,
        lunghezza: Number("20") + " " + "cm"
    },
    {
        varietà: "Zucchina Mauro",
        kg: 12,
        lunghezza: Number("18") + " " + "cm"
    },
    {
        varietà: "Zucchina Giovanni",
        kg: 12,
        lunghezza: Number("29") + " " + "cm"
    },
    {
        varietà: "Zucchina Alpi",
        kg: 12,
        lunghezza: Number("20") + " " + "cm"
    },
    {
        varietà: "Zucchina Andrea",
        kg: 12,
        lunghezza: Number("19") + " " + "cm"
    },
    {
        varietà: "Zucchina Paolo",
        kg: 12,
        lunghezza: Number("25") + " " + "cm"
    },
    {
        varietà: "Zucchina Manuel",
        kg: 12, 
        lunghezza: Number("20") + " " + "cm"
    },
    {
        varietà: "Zucchina Pasquale",
        kg: 12,
        lunghezza: Number("5") + " " + "cm"
    },
    {
        varietà: "Zucchina Lucia",
        kg: 7,
        lunghezza: Number("2") + " " + "cm"
    }
];

//console.log(zucchine.kg);

//Calcolo il kg di ciascuna
let somma = 0;

zucchine.forEach(element => {

    somma += element.kg;

});

console.log(somma);
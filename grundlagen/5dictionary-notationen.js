let meinName = "Hubertus";
let alter = 25;

console.log(meinName)

// anlegen einer Dictionary-Datenstruktur
let person = { // Schlüssel-Wert paare
    meinName: "Hubertus",
    alter: 30
};

// Dot Notation - Punktnotation  --> statisch fest
console.log( person.alter );

// Bracket Notation - Klammernotation  --> dynamisch flexibel
let nutzerAuswahl = 'meinName' // auf der Webseite: wähle etwas aus
console.log( person[nutzerAuswahl] )  // in die Klammer, der Name des Schlüssels
console.log( person['meinName'] )

/*
 Dot Notation und Bracket Notation bewirken grundsätzlich das gleiche
 Über einen Schlüssel (z.B. meinName, alter) wird ein Wert ausgewählt (z.B. "Hubertus", 30)
*/

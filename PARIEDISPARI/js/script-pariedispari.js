function generaNumeroComputer() {
    return Math.floor(Math.random() * 5) + 1;
}

for (let i = 0; i < 1; i++) {
    const inputUtente = prompt("Scegli un numero da 1 a 5:");
    const numeroUtente = parseInt(inputUtente);

    if (numeroUtente >= 1 && numeroUtente <= 5) {
        const numeroComputer = generaNumeroComputer();
        const somma = numeroUtente + numeroComputer;

        console.log("Numero utente:", numeroUtente);
        console.log("Numero computer:", numeroComputer);
        console.log("Somma:", somma);

        if (somma % 2 === 0) {
            console.log("La somma è pari: Il computer perde, l'utente vince!");
        } else if (somma % 2 === 1) {
            console.log("La somma è dispari: Il computer vince, l'utente perde!");
        } else {
            console.log("Errore nella somma.");
        }

    } else {
        console.log("Input non valido. Inserisci un numero da 1 a 5.");
    }
}
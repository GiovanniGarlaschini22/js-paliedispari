// Richiesta inserimento parola //
let parola = prompt("Inserire la parola desiderata:");

// Funzione per determinare se la parola è palindroma //
function ePalindroma(parola) {
    let lunghezza = parola.length;
    for (let i = 0; i < lunghezza / 2; i++) {
      if (parola[i] !== parola[lunghezza - 1 - i]) {
        return false;
      }
    }
    return true;
}
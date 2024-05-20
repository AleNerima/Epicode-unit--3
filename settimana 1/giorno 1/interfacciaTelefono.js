"use strict";
class User {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.minutiChiamati = 0;
    }
    ricarica(ammontare) {
        this.credito += ammontare;
    }
    chiamata(minuti) {
        const costoChiamata = minuti * 0.2;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.minutiChiamati += minuti;
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }
    chiama404() {
        return this.credito;
    }
    getNumeroChiamate() {
        return this.minutiChiamati;
    }
    azzeraChiamate() {
        this.minutiChiamati = 0;
    }
    static verificaStatoUtenti(utenti) {
        for (const utente of utenti) {
            console.log(`${utente.nome} ${utente.cognome} - Credito residuo: ${utente.chiama404()} euro, Minuti chiamati: ${utente.getNumeroChiamate()}`);
        }
    }
}
// Esempio di utilizzo
const utenti = [
    new User("Mario", "Rossi"),
    new User("Luigi", "Verdi")
];
utenti[0].ricarica(10); // Ricarica di 10 euro 
utenti[0].chiamata(1); // Effettua una chiamata di 1 minuto quindi ritorna 9.8 
utenti[1].ricarica(15);
utenti[1].chiamata(10);
User.verificaStatoUtenti(utenti); // Verifica lo stato di tutti gli utenti

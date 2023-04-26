// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// VARIABILI 
let nameuser, lastNameUser, favoriteColor;

// chiedi all’utente il suo nome
nameuser = prompt("Inserisci il tuo nome");
console.log(nameuser);

// chiedi all’utente il suo cognome
lastNameUser = prompt("Inserisci il tuo cognome");
console.log(lastNameUser);

// chiedi all’utente il suo colore preferito
favoriteColor = prompt("Inserisci il tuo colore preferito");
console.log(favoriteColor);

// Infine scrivi sulla pagina nomecognomecolorepreferito21
document.getElementById("password").innerHTML=("Password consigliata: ") + nameuser + lastNameUser + favoriteColor + 21 ;

// DEBUG 
// document.getElementById("test").innerHTML= "ciao gianni"

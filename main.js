//Calcolare il prezzo totale del viaggio in base all'età del passeggiero, il numero di km


// chiedere l'età del passeggiero
const età_passeggiero = parseInt(prompt("Quanti anni hai?"));

if (isNaN(età_passeggiero)){
    alert("Inserire un valore numerico!");
}

//Chiedere il numero di km
const numero_km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
if (isNaN(numero_km)){
    alert("Inserire un valore numerico!");
}

console.log(età_passeggiero, numero_km);

// calcolare il prezzo del biglietto
let prezzo_biglietto_intero = numero_km * 0.21
console.log(prezzo_biglietto_intero)

//sconti

if (età_passeggiero < 18){
    const sconto_minorenne = prezzo_biglietto_intero / 100 * 20;
    const prezzo_finale = prezzo_biglietto_intero - sconto_minorenne;
    console.log(prezzo_finale);
} else if (età_passeggiero > 65){
    const sconto_anziano = prezzo_biglietto_intero / 100 * 40;
    const prezzo_finale = prezzo_biglietto_intero - sconto_anziano;
    console.log(prezzo_finale);
} else {
  console.log(prezzo_biglietto_intero)
}

document.getElementById("prezzo").innerHTML = prezzo_biglietto_intero.toFixed(2)

// (vislizza numeri fino ai decimali)
function toFixedIfNecessary(value, dp) {
  return +parseFloat(value).toFixed(dp);
}

// - chiedere la distanza da percorrere
const Distance = parseInt(`Distanza Da Percorrere`);
console.log("distanza da percorrere : " + Distance + "km");

// - chiedere l età
const Userage = parseInt(`inserisci la tua età`);
console.log("età del passeggero : " + Userage);

// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
const Price = 0.21;

let totalprice = Distance * Price;
console.log("prezzo tratta : " + toFixedIfNecessary(totalprice, 2) + "€");

// - va applicato uno sconto del 20% per i minorenni
if (Userage < 18) {
  discountund = totalprice - (totalprice * 20) / 100;
  console.log(
    "prezzo tratta con sconto minori : " +
      toFixedIfNecessary(discountund, 2) +
      "€"
  );
}
// va applicato uno sconto del 40% per gli over 65.
if (Userage > 65) {
  discountovr = totalprice - (totalprice * 40) / 100;
  console.log(
    "prezzo tratta con sconto anziani : " +
      toFixedIfNecessary(discountovr, 2) +
      "€"
  );
}

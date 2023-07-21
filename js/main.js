// raccolgo elementi di interesse e li metto nelle costanti

const usernameInput = document.getElementById(`UsernameInput`);
const distanceImput = document.getElementById(`DistanceInput`);
const ageInput = document.getElementById(`UserAgeInput`);
const calcPrice = document.getElementById(`calcprice`);

// aggiungo event listener

calcPrice = addEventListener(`click`, function () {
  // leggo il valore degli input
  const NameSurname = usernameInput.value;
  const Kilometers = distanceImput.value;
  const AgeOf = ageInput.value;

  // console.log(NameSurname, Kilometers, AgeOf);

  // calcolo il valore del biglietto

  const TicketFare = 0.21;
  let TicketPrice = TicketFare * Kilometers;

  if (AgeOf < 18) {
    TicketPrice *= 0.8;
  } else if (AgeOf > 65) {
    TicketPrice *= 0.6;
  }
  console.log(TicketPrice);
});

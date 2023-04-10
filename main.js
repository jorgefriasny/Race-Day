let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 32;

if (registeredEarly && age > 18) {
  raceNumber += 1000;
}

if (registeredEarly && age > 18) {
  console.log(
    `Your race will begin at 9:30 am. Your race number is ${raceNumber}.`
  );
}

if (!registeredEarly && age > 18) {
  console.log(
    `Your race will begin at 11:00 am. Your race number is ${raceNumber}.`
  );
}

if (age <= 18) {
  console.log(
    `Your race will begin at 12:30 pm. Your race number is ${raceNumber}.`
  );
}

if (registeredEarly && age === 18) {
  console.log(`See the registration Desk`);
}

if (!registeredEarly && age === 18) {
  console.log(`See the registration Desk`);
}

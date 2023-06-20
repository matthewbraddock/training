let raceNumber = Math.floor(Math.random() * 1000);

let raceRegistered = false;

let raceAge = 25;


if (raceAge > 18 && raceRegistered) {
  raceNumber += 1000
}

if (raceAge > 18 && raceRegistered) {
  console.log(`Your race time will be at 09:30 AM. Your race number is ${raceNumber}`)
}else if (raceAge > 18 && !raceRegistered) {
  console.log(`Late adults run at 11:00 AM. Your race number is ${raceNumber}`)
}else if(raceAge < 18) {
  console.log(`Youth registrants run at 12:30 PM. Your race number is ${raceNumber}`)
}else if (raceAge === 18) {
  console.log('Please see the registration desk.')
}

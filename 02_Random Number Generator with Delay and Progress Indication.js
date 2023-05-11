/* 2. Random Number Generator with Delay and Progress Indication:
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a 
variable so can be modified. The program displays a message every second indicating the time remaining 
until the random number is generated and then outputs the generated number */

let delayInSeconds = 3;
let timeLeft = delayInSeconds;

let countdown = setInterval(() => {
  console.log(`${timeLeft} seconds remaining...`);
  timeLeft--;
}, 1000);

setTimeout(() => {
  clearInterval(countdown);
  let randomNumber = Math.floor(Math.random() * 100);
  console.log(`Random number generated: ${randomNumber}`);
}, delayInSeconds * 1000);

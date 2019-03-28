const randomNumber = Math.floor(Math.random() * 100) + 1;//Generates random number between 1 and 100
const input = document.querySelector("input");
const headlineTwo = document.querySelector("h2");
const headlineThree = document.querySelector("h3");
const headlineFour = document.querySelector("h4");
const headlineFive = document.querySelector("h5");
const guessButton = document.querySelector("button.guessButton");
const restartButton = document.querySelector("button.restartButton")
const previousGuess = [];
let guessCount;

document.getElementById("myTextField").focus();

const focusMethod = function getFocus() {
  document.getElementById("myTextField").focus();
}

function restartGame() {
   location.reload();
}

guessButton.addEventListener("click", (event)=> {
  if (input.value == randomNumber) {
    document.querySelector("h2").style.color="green";
    headlineTwo.textContent =
      `You Guessed Right! The Random Number is ${randomNumber}. Press the Restart Game Button to start over.`;
    document.querySelector("input").disabled=true;
    document.querySelector("input").style.backgroundColor="#98fb98";//green backgroundcolor
    event.preventDefault();
  } else if (input.value % 1 != 0|| isNaN(input.value) || input.value < 1 || input.value > 100){
    document.querySelector("h2").style.color="red";
    headlineTwo.textContent = `Please enter a whole number between 1-100. Not ${input.value}`;
    document.querySelector("input").style.backgroundColor="#ff7f7f";//red backgroundcolor
    input.value = "";
  } else if (input.value > randomNumber) {
    document.querySelector("h2").style.color="black";
    headlineTwo.textContent = `Guess < Lower`;
    previousGuess.push(input.value);
    guessCount = previousGuess.length;
    headlineThree.textContent = `Previous Guess was ${input.value}`;
    headlineFour.textContent = `Guess History ${previousGuess}`;
    headlineFive.textContent = `Number of guesses ${guessCount}`;
    document.querySelector("input").style.backgroundColor="white";
    input.value = "";
  } else if (input.value < randomNumber) {
    document.querySelector("h2").style.color="black";
    headlineTwo.textContent = `Guess > higher`;
    previousGuess.push(input.value);
    guessCount = previousGuess.length;
    headlineThree.textContent = `Previous Guess was ${input.value}`;
    headlineFour.textContent = `Guess History ${previousGuess}`;
    headlineFive.textContent = `Number of guesses ${guessCount}`;
    document.querySelector("input").style.backgroundColor="white";
    input.value = "";
  }
});

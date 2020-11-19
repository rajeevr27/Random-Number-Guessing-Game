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

const focusMethod = function() {
  document.getElementById("myTextField").focus();
  }

const restartGame = function() {
   location.reload();
  }

guessButton.addEventListener("click", function() {
  if (input.value == randomNumber) {
      document.querySelector("h2").style.color = "green";
      headlineTwo.textContent =
        `You Guessed Right! The Random Number is ${randomNumber}. Press the Restart Game Button to start over.`;
      previousGuess.push(Number(input.value));
      guessCount = previousGuess.length;
      headlineFour.textContent = `Guess History ${previousGuess}`;
      headlineFive.textContent = `Number of guesses ${guessCount}`;
      document.querySelector("input").disabled = true;
      document.querySelector("button.guessButton").disabled = true;
      document.querySelector("input").style.backgroundColor = "#98fb98";//light green
      input.value = Number(input.value);
  } else if (guessCount >= 9 && !((input.value) % 1 != 0) && !isNaN(input.value) && input.value > 0 && input.value < 101) {
      document.querySelector("h2").style.color = "red";
      headlineTwo.textContent =
        `You have exceeded your number of guesses. Press the Restart Game Button to start over.`;
      previousGuess.push(Number(input.value));
      guessCount = previousGuess.length;
      headlineFour.textContent = `Guess History ${previousGuess}`;
      headlineFive.textContent = `Number of guesses ${guessCount}`;
      document.querySelector("input").disabled = true;
      document.querySelector("button.guessButton").disabled = true;
      document.querySelector("input").style.backgroundColor = "#ff7f7f";//light red
      input.value = Number(input.value);
  } else if (input.value % 1 != 0 || isNaN(input.value) || input.value < 1 || input.value > 100){
      document.querySelector("h2").style.color = "red";
      headlineTwo.textContent = `Please enter a whole number between 1 and 100.`;
      document.querySelector("input").style.backgroundColor = "#ff7f7f";//light red
      input.value = "";
  } else if (input.value > randomNumber) {
      document.querySelector("h2").style.color = "black";
      headlineTwo.textContent = `Guess < Lower`;
      previousGuess.push(Number(input.value));
      guessCount = previousGuess.length;
      headlineThree.textContent = `Previous Guess was ${Number(input.value)}`;
      headlineFour.textContent = `Guess History ${previousGuess}`;
      headlineFive.textContent = `Number of guesses ${guessCount}`;
      document.querySelector("input").style.backgroundColor = "#E8E8E8";//light gray
      input.value = "";
  } else if (input.value < randomNumber) {
      document.querySelector("h2").style.color = "black";
      headlineTwo.textContent = `Guess > Higher`;
      previousGuess.push(Number(input.value));
      guessCount = previousGuess.length;
      headlineThree.textContent = `Previous Guess was ${Number(input.value)}`;
      headlineFour.textContent = `Guess History ${previousGuess}`;
      headlineFive.textContent = `Number of guesses ${guessCount}`;
      document.querySelector("input").style.backgroundColor = "#E8E8E8";//light gray
      input.value = "";
  }
});

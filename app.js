const randomNumber = Math.floor(Math.random() * 100) + 1;//Generates random number between 1 and 100
const inputText = document.querySelector("input");
const indicatorMessage = document.querySelector("h2");
const precedingGuess = document.querySelector("h3");
const guessHistory = document.querySelector("h4");
const numberOfGuesses = document.querySelector("h5");
const alertMessage = document.querySelector("div.alert-message");
const guessButton = document.querySelector("button#guessButton");
const restartButton = document.querySelector("button#restartButton")
const previousGuesses = [];
let guessCount;

function guessListHistory() {
  guessHistory.innerHTML = `<h4>Guess History:</h4>`;
  guessHistory.innerHTML += `<ul>`;
    for (let i=0; i<previousGuesses.length; i+=1){//Start of for loop
      const guess = previousGuesses[i];
      if(guess == randomNumber) {
        guessHistory.innerHTML += `<li class='list-style' id='border-style'>${previousGuesses[i]}</li>`;
      }else {
        guessHistory.innerHTML += `<li class='list-style'>${previousGuesses[i]}</li>`;
      }
    }//End of for loop
  guessHistory.innerHTML += `</ul>`;
}

function checkArrayLength() {
  if(previousGuesses.length === 0) {
    document.querySelector("h2").style.color = "orange";
  }
}

document.getElementById("myTextField").focus();

const focusMethod = function() {
    document.getElementById("myTextField").focus();
}

const restartGame = function() {
    location.reload();
    document.getElementById("myTextField").value = "";
}

guessButton.addEventListener("click", function() {
  if (inputText.value == randomNumber) {
      document.querySelector("h2").style.color = "green";
      indicatorMessage.textContent =
        `You Guessed Right! The Random Number is ${randomNumber}.`;
      document.querySelector("div.alert-message").style.backgroundColor = "";
      alertMessage.textContent = ``;
      previousGuesses.push(Number(inputText.value));
      guessCount = previousGuesses.length;
      guessListHistory();
      numberOfGuesses.textContent = `Number of Guesses: ${guessCount}`;
      document.querySelector("input").disabled = true;
      document.querySelector("input").style.cursor = "not-allowed";
      document.querySelector("button#guessButton").disabled = true;
      document.querySelector("button#guessButton").style.cursor = "not-allowed";
      document.querySelector("input").style.backgroundColor = "#98fb98";//light green
      inputText.value = Number(inputText.value);
  } else if (previousGuesses.indexOf(Number(inputText.value)) > -1){
      document.querySelector("div.alert-message").style.backgroundColor = "orange";
      alertMessage.textContent = `The number ${Number(inputText.value)} has already been guessed.`;
      document.querySelector("input").style.backgroundColor = "#FCD299";//light orange
      inputText.value = "";
  } else if (guessCount === 9 && !((inputText.value) % 1 != 0) && !isNaN(inputText.value) && inputText.value > 0 && inputText.value < 101) {
      document.querySelector("h2").style.color = "red";
      indicatorMessage.textContent =
        `You have reached the maximum number of guesses allowed.`;
      document.querySelector("div.alert-message").style.backgroundColor = "";
      alertMessage.textContent = ``;
      previousGuesses.push(Number(inputText.value));
      guessCount = previousGuesses.length;
      guessListHistory();
      numberOfGuesses.textContent = `Number of Guesses: ${guessCount}`;
      document.querySelector("input").disabled = true;
      document.querySelector("input").style.cursor = "not-allowed";
      document.querySelector("button#guessButton").disabled = true;
      document.querySelector("button#guessButton").style.cursor = "not-allowed";
      document.querySelector("input").style.backgroundColor = "#ff7f7f";//light red
      inputText.value = Number(inputText.value);
  } else if (inputText.value % 1 != 0 || isNaN(inputText.value) || inputText.value < 1 || inputText.value > 100){
      checkArrayLength();
      document.querySelector("div.alert-message").style.backgroundColor = "orange";
      alertMessage.textContent = `Please enter a whole number between 1 and 100.`;
      document.querySelector("input").style.backgroundColor = "#FCD299";//light orange
      inputText.value = "";
  } else if (inputText.value > randomNumber) {
      document.querySelector("h2").style.color = "black";
      indicatorMessage.textContent = `Guess < Lower`;
      document.querySelector("div.alert-message").style.backgroundColor = "";
      alertMessage.textContent = ``;
      previousGuesses.push(Number(inputText.value));
      guessCount = previousGuesses.length;
      precedingGuess.textContent = `Previous Guess: ${Number(inputText.value)}`;
      guessListHistory();
      numberOfGuesses.textContent = `Number of Guesses: ${guessCount}`;
      document.querySelector("input").style.backgroundColor = "#E8E8E8";//light gray
      inputText.value = "";
  } else if (inputText.value < randomNumber) {
      document.querySelector("h2").style.color = "black";
      indicatorMessage.textContent = `Guess > Higher`;
      document.querySelector("div.alert-message").style.backgroundColor = "";
      alertMessage.textContent = ``;
      previousGuesses.push(Number(inputText.value));
      guessCount = previousGuesses.length;
      precedingGuess.textContent = `Previous Guess: ${Number(inputText.value)}`;
      guessListHistory();
      numberOfGuesses.textContent = `Number of Guesses: ${guessCount}`;
      document.querySelector("input").style.backgroundColor = "#E8E8E8";//light gray
      inputText.value = "";
  }
});

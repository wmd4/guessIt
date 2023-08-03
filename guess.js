let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100);
function checkGuess () {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber){
        gameResult.textContent = "Too High,try again u dumB "
        gameResult.style.backgroundColor="#1e217c"
    }
    else if (guessedNumber < randomNumber){
        gameResult.textContent = "Too Low,try again u dumB "
        gameResult.style.backgroundColor="#1e217c"
    }
    else if (guessedNumber === randomNumber){
        gameResult.textContent = "Congratulations broo, You Guessed Correctly"
        gameResult.style.backgroundColor="green";
    }
    else {
        gameResult.textContent = "it's an Invalid Input"
        gameResult.style.backgroundColor="red";

    }
}
// Get the DOM Elements and Initialize the game

const input = document.querySelector("input");
guess = document.querySelector(".guess");
CheckButton = document.querySelector(".button");
RemainingChances = document.querySelector(".chances");

start = document.querySelector(".start");
console.log(start);
stops = document.querySelector(".stops");
console.log(stops);



//Set the focus on the input field

input.focus();


var chance ;


var Dlevel;
function getDifficulty(value)
{
    document.getElementsByClassName("difficulty")[0].style.display = "none";
    console.log(value);
    if(value == "easy")
    {
        
        stops.textContent = 10;
        randomNum  = Math.floor(Math.random() * 10) + 1;
        console.log(randomNum);
        chance = 3;
        RemainingChances.innerText = chance;
    }
    else if(value == "medium")
    {
        stops.textContent = 50;
        randomNum  = Math.floor(Math.random() * 50) + 1;
        console.log(randomNum);
        chance = 5;
        RemainingChances.innerText = chance;
    }
    else if(value == "hard")
    {
        stops.textContent = 100;
        randomNum  = Math.floor(Math.random() * 100) + 1;
        console.log(randomNum);
        chance = 7;
        RemainingChances.innerText = chance;
    }
}



//Listen for the click event on check button

CheckButton.addEventListener("click", () => {
    //Decrementing the chance for every button click
    chance--;
    // Get the value from the input field
    if(chance < 0)
    {
        window.location.reload();
    }
    let inputValue = parseInt(input.value);
    //Check If inputValue is equal to randomNum
    if(inputValue > parseInt(stops.innerText))
    {
        [guess.textContent , RemainingChances.textContent] = ["Your Guess is Invalid",chance];
        guess.style.color = "#DE0611";
    }
    else if(inputValue == randomNum)
    {
        //Update the guessed number , disable input , check button , text color
        [guess.textContent , input.disabled] = ["Congratulations",true];
        [CheckButton.textContent,guess.style.color] = ["Replay","#333"];
        chance = -1;
    }
    else if(inputValue > randomNum )
    {
        [guess.textContent , RemainingChances.textContent] = ["Your Guess is High",chance];
        guess.style.color = "#333";
    }

    else if(inputValue < randomNum && inputValue > 0)
    {
        [guess.textContent , RemainingChances.textContent] = ["Your Guess is Low",chance];
        guess.style.color = "#333";
    }

    //If value is not in the range between 1 to 100

    if(chance == 0)
    {
        [CheckButton.textContent,input.disabled, inputValue] = ["Replay",true,""];
        [guess.textContent,guess.style.color] = ["You lost the game the number is "+randomNum,"#DE0611"];

    }
    input.value = null;
    input.focus();
})

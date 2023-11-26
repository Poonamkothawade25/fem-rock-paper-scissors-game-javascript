const choices = [
    {
        src: "images/icon-paper.svg",
        color1: "hsl(230, 89%, 62%)",
        color2: "hsl(230, 89%, 65%)"
    },
    {
        src: "images/icon-scissors.svg",
        color1: "hsl(39, 89%, 49%)",
        color2: "hsl(40, 84%, 53%)"
    },
    {
        src: "images/icon-rock.svg",
        color1: "hsl(349, 71%, 52%)",
        color2: "hsl(349, 70%, 56%)"
    }
]
const possibleChoices = document.querySelectorAll(".userChoice");
const housePickedImg = document.getElementById("scissor-2");
const userChoiceImg = document.getElementById("paper-2");
const userChoiceBgColor = document.getElementById("paper");
const housePickedBgColor = document.getElementById("scissor");
const playAgain = document.getElementById("playAgain");
const result = document.getElementById("result");
const scoreValue = document.getElementById("score");

let userChoice;
let housePicked;
let score = 0;

scoreValue.textContent = score;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    renderGame();
}))




function renderGame() {
    console.log(userChoice);
    userChoiceDisplay(userChoice);
    housePickedGenerator(housePicked);

    document.getElementById("title").classList.remove("hideElements");
    document.getElementById("triangle-img").classList.add("hideElements");
    document.getElementById("paper").classList.add("displayGame");
    document.getElementById("scissor").classList.add("displayGame");
    // document.getElementById("scissor-1").classList.add("housepicked");
    // document.getElementById("scissor-2").classList.add("hideElements");
    document.getElementById("rock").classList.add("hideElements");

    gameResults(userChoice, housePicked);

}


function userChoiceDisplay(userChoice) {
    if(userChoice === "paper" || userChoice === "paper-1" || userChoice === "paper-2") 
    {
        userChoiceImg.src = choices[0].src; 
        userChoiceBgColor.style.setProperty("--paper_gradient_1", choices[0].color1);
        userChoiceBgColor.style.setProperty("--paper_gradient_2", choices[0].color2);
    }
    else if(userChoice === "scissor" || userChoice === "scissor-1" || userChoice === "scissor-2") 
    {
        userChoiceImg.src = choices[1].src;
        userChoiceBgColor.style.setProperty("--paper_gradient_1", choices[1].color1);
        userChoiceBgColor.style.setProperty("--paper_gradient_2", choices[1].color2);
    }
    else
    {
        userChoiceImg.src = choices[2].src;
        userChoiceBgColor.style.setProperty("--paper_gradient_1", choices[2].color1);
        userChoiceBgColor.style.setProperty("--paper_gradient_2", choices[2].color2);
    }
}

function housePickedGenerator(housePicked) {
    housePicked = Math.floor(Math.random() * 3);
    housePickedImg.src = choices[housePicked].src;
    housePickedBgColor.style.setProperty("--scissor_gradient_1", choices[housePicked].color1)
    housePickedBgColor.style.setProperty("--scissor_gradient_2", choices[housePicked].color2)
}

// function removeHandler() {
//     possibleChoices.removeEventListener("click", () => {

//         // userChoiceDisplay(userChoice);
//         // housePickedGenerator(housePicked);
//         // startGame();

//     });
// }


function gameResults(userChoice, handPicked) {

    document.getElementById("Results").classList.add("showResults");
    
    if((userChoice === "paper" || userChoice === "paper-1" || userChoice === "paper-2") && housePicked === 2) 
    {
        playAgain.style.setProperty("--rock_gradient_1", choices[2].color2);
        result.textContent = "You Win";
        score++;
    }
    if((userChoice === "scissor" || userChoice === "scissor-1" || userChoice === "scissor-2") && housePicked === 0)
    {
        playAgain.style.setProperty("--rock_gradient_1", choices[2].color2);
        result.textContent = "You Win";
        score++;
    }
    if((userChoice === "rock" || userChoice === "rock-1" || userChoice === "rock-2") && housePicked === 1)
    {
        playAgain.style.setProperty("--rock_gradient_1", choices[2].color2);
        result.textContent = "You Win";
        score++
    }
    if((userChoice === "paper" || userChoice === "paper-1" || userChoice === "paper-2") && housePicked === 0)
    {
        playAgain.style.setProperty("--rock_gradient_1", choices[1].color2);
        result.textContent = "It's a draw";
    }
    if((userChoice === "rock" || userChoice === "rock-1" || userChoice === "rock-2") && housePicked === 1)
    {
        playAgain.style.setProperty("--rock_gradient_1", choices[1].color2);
        result.textContent = "It's a draw";
    }
    if ((userChoice === "scissor" || userChoice === "scissor-1" || userChoice === "scissor-2") && housePicked === 1)
    {
        playAgain.style.setProperty("--rock_gradient_1", choices[1].color2);
        result.textContent = "It's a draw";
    }
    else
    {
        playAgain.style.setProperty("--rock_gradient_1", choices[2].color2);
        result.textContent = "You Lose";
    }

    scoreValue.textContent = score;
    
}

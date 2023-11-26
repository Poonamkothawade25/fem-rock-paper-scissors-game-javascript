const CHOICES = [
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    },
    {
        name: "rock",
        beats: "scissors"
    }
]

// DOM

const rulesBtn = document.querySelector(".rules-btn");
const closeRulesBtn = document.querySelector("#modal-close-btn");
const rulesModal = document.querySelector(".modal"); 

const choiceButtons = document.querySelectorAll(".choice-btn");
const gameSection = document.querySelector(".game-start");

const choiceResultsSection = document.querySelector(".results");
const choicesResultDivs = document.querySelectorAll(".choice-result");

const resultWinner = document.querySelector(".results-winner");
const resultText = document.querySelector(".result-text");

const playAgainBtn = document.querySelector("#playAgainBtn");

const scoreValue = document.querySelector("#score-value");
let score = 0;
showScore(score);

// Game logic

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("clicked");
        const choiceName = button.dataset.choice;
        const choice = CHOICES.find(choice => choice.name === choiceName);
        choose(choice);
    })
})

function choose(choice) {
    const houseChoice = houseChoose();
    displayResults([choice, houseChoice])
    displayWinner([choice, houseChoice]);
}

function houseChoose() {
    const random = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[random];
}

function displayResults(results) {
    choicesResultDivs.forEach((resultDiv, idx) => {
        setTimeout(() => {
            resultDiv.innerHTML = `
                <div class="choice ${results[idx].name}">
                    <img 
                        src="images/icon-${results[idx].name}.svg" 
                        alt="${results[idx].name}" 
                        class="choice-img"" 
                    />
                </div>
            `
        }, idx * 1000)
    })

    choiceResultsSection.classList.remove("hidden");
    gameSection.classList.add("hidden");

}

function displayWinner(results) {

    setTimeout(() => {
        const userWins = isWinner(results);
        const houseWins = isWinner(results.reverse());

        if(userWins) {
            resultText.textContent = "You Win";
            choicesResultDivs[0].classList.add("winner");
            showScore(1);
        } else if(houseWins) {
            resultText.textContent ="you lose";
            choicesResultDivs[1].classList.add("winner");
            showScore(-1);
        } else {
            resultText.textContent ="draw";
        }
        
        resultWinner.classList.remove("hidden");
        choiceResultsSection.classList.add("show-winner");

    }, 1000)

}

function isWinner(results) {
    return results[0].beats === results[1].name;

}


// Play Again

playAgainBtn.addEventListener("click", () => {
    gameSection.classList.remove("hidden");
    choiceResultsSection.classList.add("hidden");

    choicesResultDivs.forEach(resultDiv => {
        resultDiv.innerHTML = "";
        resultDiv.classList.remove("winner");
    })

    resultWinner.classList.add("hidden");
    resultText.textContent = "";
    choiceResultsSection.classList.remove("show-winner");

})

// Show score 

function showScore(points) {

    score += points;
    scoreValue.textContent = score;
}


// show hide rules modal

rulesBtn.addEventListener("click", showRulesModal);

function showRulesModal() {
    rulesModal.classList.add("show-modal");
}

closeRulesBtn.addEventListener("click", closeRulesModal);

function closeRulesModal() {
    rulesModal.classList.remove("show-modal");
}
const playerInput = document.getElementsByClassName("rpsImage");
const playerHand = document.getElementById("playerHand");
const cpuHand = document.getElementById("cpuHand");
const gameText = document.getElementById("gameText");
const modal = document.getElementById("modal");
const modalContainer = document.getElementById("modalContainer");
const modalTitle = document.getElementById("modalTitle");
const playAgain= document.getElementById("playAgain");
const delayInMilliseconds = 1425;

let cpuChoice = '';

let playerScore = 0;
let computerScore = 0;

function playerPlay(input) {
    return input;
}

function computerPlay() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return playerTie(playerSelection);
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'scissors')
            return playerWin(playerSelection, computerSelection);
        else
            return playerLose(playerSelection, computerSelection);
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return playerWin(playerSelection, computerSelection);
        }
        else
            return playerLose(playerSelection, computerSelection);
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'paper')
            return playerWin(playerSelection, computerSelection);
        else
            return playerLose(playerSelection, computerSelection);
    }
}

// checks to see if game is ovr then prompts user to play again
function gameOver() {
    if (playerScore === 5 && playerScore > computerScore) {
        modalTitle.innerHTML =`You win! <br /> Final Score: ${playerScore} - ${computerScore}`;
        showModal();
    }
    else if (computerScore === 5 && playerScore < computerScore) {
        modalTitle.innerHTML =`You Lose! <br /> Final Score: ${playerScore} - ${computerScore}`;
        showModal();
    }
}

function showModal () {
    setTimeout(function () {
        modalContainer.classList.add('show');
        }, delayInMilliseconds)
}


function testModal () {
    modalTitle.innerHTML =`You Win! <br /> Final Score: 5 - 0`;
    showModal();
}

// function hideInputs () {
//     setTimeout(function () {
//         document.querySelectorAll('.rpsImage').forEach(item => { 
//             item.classList.add('hidden');
//         })
//         document.querySelectorAll('.cardText').forEach(item => { 
//             item.classList.add('hidden');
//         })
//         document.getElementById('playAgainBtn').classList.remove('hidden');
//     }, delayInMilliseconds)

// }
// player win
function playerWin(playerSelection, computerSelection) {
    
    let msg = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}.`;
    playerScore++;
    updateText(msg);
    gameOver();
}
// cpu win
function playerLose(playerSelection, computerSelection) {
    let msg = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}.`;
    computerScore++;
    updateText(msg);
    gameOver();
}
// tie
function playerTie(playerSelection, computerSelection) {
    let msg = `Tie! Both players selected ${playerSelection}.`;
    updateText(msg);
}

function updateText (msg) {
    setTimeout(function () {
        gameText.innerHTML = msg;
        score();
    }, delayInMilliseconds)
}

// updates the number scores
function score() {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("cpuScore").innerHTML = computerScore;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


// Adds event listener to all of the player input hands
// I need to get the id of the element that was hovered over then need to use that id to know which
// image to change the playerHand to
document.querySelectorAll('.rpsImage').forEach(item => {
    // change playerHand image to mouseover selection
    item.addEventListener('mouseover', event => {
        document.getElementById("playerHand").src = `./images/${item.id}Left.png`;
    })
    // change playerHand back to rock when no longer mouseover
    item.addEventListener('mouseleave', event => {
        document.getElementById("playerHand").src = "./images/rockLeft.png";
    })
    item.addEventListener('click', event => {
        // When player picks a hand begin the round
        // call playRound sending itemID and it generates CPU selection
        cpuChoice = computerPlay();
        playRound(playerPlay(item.id), cpuChoice);
        // change both images to rock 
        playerHand.src = `./images/rockLeft.png`;
        cpuHand.src= `./images/rockRight.png`;
        // begin rock paper scissors animation
        playerHand.classList.add('animated');
        cpuHand.classList.add('animated');
        // after delay change image to selection
        setTimeout(function () {
            playerHand.src = `./images/${item.id}Left.png`;
            cpuHand.src = `./images/${cpuChoice}Right.png`;
        }, delayInMilliseconds)
    })
})

// removes animated class after finishing the animation
playerHand.addEventListener('animationend', () => {
    playerHand.classList.remove('animated');
    cpuHand.classList.remove('animated');
  });

playAgain.addEventListener('click', () => {
    modalContainer.classList.remove('show');
    playerScore = 0;
    computerScore = 0;
    gameText.innerHTML = '';
    score();
}) 


const overlay = document.getElementById('overlay');
overlay.addEventListener("click", function(){
    overlay.classList.add('hide');
});

// Put text after video animation

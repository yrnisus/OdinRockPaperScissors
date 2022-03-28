const playerInput = document.getElementsByClassName("rpsImage");
const playerHand = document.getElementById("playerHand");
const cpuHand = document.getElementById("cpuHand");
const gameText = document.getElementById("gameText");
const delayInMilliseconds = 1425;

let cpuChoice = '';

let playerScore = 0;
let computerScore = 0;

function playerPlay(input) {
    // let valid = false;
    // let choice = prompt("Please choose: Rock, Paper, or Scissors").toLowerCase();
    // if (choice == 'rock' || choice == 'paper' || choice == 'scissors')
    //     valid = true;
    // while (!valid) {
    //     choice = prompt("Invalid choice. Please choose: Rock, Paper, or Scissors").toLowerCase();
    //     if (choice == 'rock' || choice == 'paper' || choice == 'scissors')
    //         valid = true;
    // }
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
        console.log(`You win! Final Score: ${playerScore} - ${computerScore}`);
    }
    else if (computerScore === 5 && playerScore < computerScore) {
        console.log(`You lose! Final Score: ${playerScore} - ${computerScore}`);
    }
    

}
// player win
function playerWin(playerSelection, computerSelection) {
    let msg = `You win! ${playerSelection} beats ${computerSelection}.`;
    playerScore++;
    updateText(msg);
    gameOver();
}
// cpu win
function playerLose(playerSelection, computerSelection) {
    let msg = `You lose! ${computerSelection} beats ${playerSelection}.`;
    computerScore++;
    updateText(msg);
    gameOver();
}
// tie
function playerTie(playerSelection, computerSelection) {
    let msg = `You tie! Both players selected ${playerSelection}.`;
    updateText(msg);
}

function updateText (msg) {
    setTimeout(function () {
        gameText.insertAdjacentHTML('beforeend', `${msg} <br />`)
        score();;
    }, delayInMilliseconds)
}

// updates the number scores
function score() {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("cpuScore").innerHTML = computerScore;
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

//begin game
function playAnimation(item) {
}

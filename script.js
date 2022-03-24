let playerScore = 0;
        let computerScore = 0;

        function playerPlay() {
            let valid = false;
            let choice = prompt("Please choose: Rock, Paper, or Scissors").toLowerCase();
            if (choice == 'rock' || choice == 'paper' || choice == 'scissors')
                valid = true;
            while (!valid) {
                choice = prompt("Invalid choice. Please choose: Rock, Paper, or Scissors").toLowerCase();
                if (choice == 'rock' || choice == 'paper' || choice == 'scissors')
                    valid = true;
            }
            return choice;
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

        function game() {
            playerScore = 0;
            computerScore = 0;
            for (let i = 0; i < 5; i++) {
                playRound(playerPlay(), computerPlay());
            }
            if (playerScore > computerScore) {
                console.log(`You win! Final Score: ${playerScore} - ${computerScore}`);
            }
            else if (playerScore < computerScore) {
                console.log(`You lose! Final Score: ${playerScore} - ${computerScore}`);
            }
            else if (playerScore == computerScore) {
                console.log(`You Tied! Final Score: ${playerScore} - ${computerScore}`);
            }

        }

        function playerWin(playerSelection, computerSelection) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            playerScore++;
        }

        function playerLose(playerSelection, computerSelection) {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            computerScore++;
        }

        function playerTie(playerSelection, computerSelection) {
            console.log(`You tie! Both players selected ${playerSelection}.`);
        }

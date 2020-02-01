
     let pChoice;
     let cChoice; 
    function computerPlay() {
        let compChoice = ['rock', 'paper', 'scissors'];
        cChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
        console.log(cChoice);
    }

    function playerChoice() {
         pChoice = document.getElementById('pChoice').value;
         pChoice = pChoice.toLowerCase();
        if ((pChoice != 'rock') && (pChoice != 'paper') && (pChoice !='scissors')) {
            alert('Please choose paper or rock or scissors!')
        
        }
        console.log(pChoice);

    }

    let playerScore = 0;
    let compScore = 0;

    function playRound () {
        computerPlay();
        playerChoice();
        let result;
        if (pChoice == 'rock') {
            switch (cChoice) {
                case 'rock':
                    result = "Tie!";
                    break;
                case 'paper':
                    result = "You lose!";
                    break;
                default:
                    result = "You win!"};
        } else if (pChoice == 'paper') {
            switch (cChoice) {
                case 'rock':
                    result = "You win!";
                    break;
                case 'paper':
                    result = "Tie!";
                    break;
                default:
                    result = "You lose!"};
        } else if (pChoice == 'scissors') {
            switch (cChoice) {
                case 'rock':
                    result = "You lose!";
                    break;
                case 'paper':
                    result = "You win!";
                    break;
                default:
                    result = "Tie!"};
        }
        if (result == 'You win!') {
            playerScore++
            alert('You won!')
        } else if (result == 'You lose!') {
            compScore++
            alert('The computer won!')
        }else if (result == 'Tie!') {
            playerScore++
            compScore++
            alert('You tied!')
        }
        document.getElementById('pScoreBox').innerHTML = (playerScore);
        document.getElementById('cScoreBox').innerHTML = (compScore);     
     
    }

    let rounds = document.getElementById('rounds');
    let amtRound = rounds.options[rounds.selectedIndex].value;

    choiceRounds = document.querySelector('select');
    choiceRounds.addEventListener("change", function () {
         updateRound()
    }); 

    function updateRound () {
        amtRound = rounds.options[rounds.selectedIndex].value;
    }

    function newChoice() {
            neewChoice = prompt('Choose rock, paper, or scissors: ').toLowerCase();
            document.getElementById('pChoice').value = neewChoice;
        
    }
    
    function playGame() {
        i = 1;
        while (i < amtRound) {
            playRound();
            if (i > 0) {
                newChoice();   
            }
            console.log(pChoice);
            i++;
            console.log(i);
        }
    }

    document.getElementById('Play').addEventListener('click', playGame);

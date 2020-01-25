
     let pChoice = '';
     let cChoice = ''; 
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

    function playRound () {
        playerScore = 0
        compScore = 0
        if (pChoice == 'rock') {
            switch (cChoice) {
                case 'rock':
                    let result = "Tie!";
                    break;
                case 'paper':
                    let result = "You lose!";
                    break;
                default:
                    let result = "You win!"};
            } else if (pChoice == 'paper') {
                switch (cChoice) {
                    case 'rock':
                        let result = "You win!!";
                        break;
                    case 'paper':
                        let result = "Tie!";
                        break;
                    default:
                        let result = "You lose!"};
            } else if (pChoice == 'scissors') {
                switch (cChoice) {
                    case 'rock':
                        let result = "You lose!";
                        break;
                    case 'paper':
                         let result = "You win!";
                        break;
                    default:
                        let result = "Tie"};
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
            
        
            
        
    }
    document.getElementById('Choose').addEventListener('click', playerChoice);
    document.getElementById('Play').addEventListener('click', playRound);

let playerChoice
let computerPlay
let result
let playerPlay



function jankenMatch (computerPlay, playerChoice) {
    playerPlay = playerChoice.toLowerCase()
    if (playerPlay == computerPlay) 
    {
    console.log("It's a draw")
    alert("It's a draw")
    }


    else if (playerPlay == "paper" && computerPlay == 'rock')
    {
    console.log("You won!")
    alert("You won!")
    }


    else if (playerPlay == "paper" && computerPlay == 'scissor')
    {
    console.log("You lose!")
    alert("You lose!")
    }
    else if (playerPlay == "rock" && computerPlay == 'paper')
    {
    console.log("You lose!")
    alert("You lose!")
    }

    
    else if (playerPlay == "rock" && computerPlay == 'scissor')
    {
    console.log("You won!")
    alert("You won!")
    }

    
    else if (playerPlay == "scissors" && computerPlay == 'paper')
    {
    console.log("You won!")
    alert("You won!")
    }


    else if (playerPlay == "scissors" && computerPlay == 'rock')
    {
    console.log("You lose!")
    alert("You lose!")
    }
    
    else {
        alert("It only works typing either rock, paper or scissors!")
    }
    
}

function getComputerChoice () {
    computerPlay = Math.floor(Math.random() * 3 + 1);
    if (computerPlay == 1){
    computerPlay = 'paper'
    console.log(computerPlay)
    }
    if (computerPlay == 2){
    computerPlay = 'rock'
    console.log(computerPlay)
    }
    if (computerPlay == 3) {
    computerPlay = 'scissors'
    console.log(computerPlay)
    }
    return computerPlay;
}


function gameStart () {
    playerChoice = prompt('Welcome to the old rock, paper and scisor game type in your choice between either rock, paper or scissor to see if you beat the computer Type rock, paper or scissor: ')
    jankenMatch(getComputerChoice(), playerChoice)
}

document.getElementById("startGame").addEventListener("click", gameStart)

let playerChoice
let computerPlay
let result
let playerPlay
let scorePlayer = 0
let scoreComputer = 0

function bo5 (jankenMatch, scoreComputer, scorePlayer) 
{
while (scorePlayer <= 3 || scoreComputer <= 3)
jankenMatch(getComputerChoice(), playerChoice)
console.log(scorePlayer, scoreComputer)
if (scorePlayer >= 3) {
    alert('You won the match!')
    return
}
else  if (scoreComputer >= 3) {
    alert('You lost the match! 3x',scorePlayer,' for you')
    return
}
else {
    
}
}

function jankenMatch (computerPlay, playerChoice) {
    let playerPlay = prompt('Type: rock, paper or scissors.').toLowerCase()
    if (playerPlay == computerPlay) 
    {
    console.log("It's a draw")
    alert("It's a draw")
    return
    }


    else if (playerPlay == "paper" && computerPlay == 'rock')
    {
    console.log("You won!")
    alert("You won!")
    scorePlayer = scorePlayer + 1
    console.log(scorePlayer)
    return scorePlayer
    }


    else if (playerPlay == "paper" && computerPlay == 'scissors')
    {
    console.log("You lose!")
    alert("You lose!")
    scoreComputer = scoreComputer + 1
    console.log(scoreComputer)
    return scoreComputer
    }
    else if (playerPlay == "rock" && computerPlay == 'paper')
    {
    console.log("You lose!")
    alert("You lose!")
    scoreComputer = scoreComputer + 1
    console.log(scoreComputer)
    return scoreComputer
    }

    
    else if (playerPlay == "rock" && computerPlay == 'scissors')
    {
    console.log("You won!")
    alert("You won!")
    scorePlayer = scorePlayer + 1
    console.log(scorePlayer)
    return scorePlayer
    }

    
    else if (playerPlay == "scissors" && computerPlay == 'paper')
    {
    console.log("You won!")
    alert("You won!")
    scorePlayer = scorePlayer + 1
    console.log(scorePlayer)
    return scorePlayer
    }


    else if (playerPlay == "scissors" && computerPlay == 'rock')
    {
    console.log("You lose!")
    alert("You lose!")
    scoreComputer = scoreComputer + 1
    console.log(scoreComputer)
    return scoreComputer
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
    alert('Welcome to the old rock, paper and scisor game type in your choice between either rock, paper or scissor to see if you beat the computer on a best of 5')
    //playerChoice = prompt('Welcome to the old rock, paper and scisor game type in your choice between either rock, paper or scissor to see if you beat the computer Type rock, paper or scissor: ')
    //bo5 (jankenMatch, scoreComputer, scorePlayer)
    jankenMatch(getComputerChoice(), playerChoice)
}

document.getElementById("startGame").addEventListener("click", gameStart)

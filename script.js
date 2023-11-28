let pageStart = document.querySelector('#base')
pageStart.addEventListener('click', gameStart)
let playerScore = 0
let computerScore = 0
let computerPlay
function getComputerChoice () {
    computerPlay = Math.floor(Math.random() * 3 + 1);
    if (computerPlay == 1){
    console.log(computerPlay)
    return computerPlay = 'paper'
    }
    else if (computerPlay == 2){
    console.log(computerPlay)
    return computerPlay = 'rock'
    }
    else if (computerPlay == 3) {
    console.log(computerPlay)
    return computerPlay = 'scissors'
    }
}



function gameStart () {
    const rockButton = document.createElement('button')
    const paperButton = document.createElement('button')
    const scissorsButton = document.createElement('button')
    const score = document.createElement('div')
    const title = document.querySelector('#base')
    title.textContent = 'Welcome to the old rock, paper and scissors game, also known as JAN-KEN-PO. Press a button to play a round against the computer, with scores being kept live wins first to 5'
    title.appendChild(rockButton)
    title.appendChild(paperButton)
    title.appendChild(scissorsButton)
    title.append(score)
    rockButton.textContent = 'Rock'
    paperButton.textContent = 'Paper'
    scissorsButton.textContent = 'Scissors'
    rockButton.addEventListener('click', playRock)
    paperButton.addEventListener('click', playPaper)
    scissorsButton.addEventListener('click', playScissors)
    score.textContent = 'Player' + playerScore + ' X ' + computerScore + 'Computer'
    if (playerScore >= 5) {
        alert('You won the game!')
    }
    else if (computerScore >= 5) {
        alert('You lost the game!')
    }
}




function playRock() {
    getComputerChoice()
    if (computerPlay == 'scissors') {
        playerScore+= 1
        console.log('Won round!')
    }
    else if (computerPlay == 'paper') {
        computerScore+=1
        console.log('Lost round!')
    }
    else {
        console.log('Draw.')
    }
    }

function playPaper() {
    getComputerChoice()
    if (computerPlay == 'rock') {
        playerScore+= 1
        console.log('Won round!')
    }
    else if (computerPlay == 'scissors') {
        computerScore+=1
        console.log('Lost round!')
    }
    else {
        console.log('Draw.')
    }
}

function playScissors() {
    getComputerChoice()
    if (computerPlay == 'paper') {
        playerScore+= 1
        console.log('Won round!')
    }
    else if (computerPlay == 'rock') {
        computerScore+=1
        console.log('Lost round!')
    }
    else {
        console.log('Draw.')
    }
}





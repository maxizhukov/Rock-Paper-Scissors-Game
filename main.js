let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')
const result_div = document.querySelector('.result > p')
const rock_div = document.getElementById('rock')
const scissors_div = document.getElementById('scissors')
const paper_div = document.getElementById('paper')


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    let randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

console.log(getComputerChoice())
getComputerChoice()

function win(user, computer) {
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML = user.charAt(0).toUpperCase() + user.slice(1) + ' beats ' + computer.charAt(0).toUpperCase() + computer.slice(1) + '. You WIN!🔥'
}
function lose(user, computer) {
    computerScore++
    computerScore_span.innerHTML = computerScore
    userScore_span.innerHTML = userScore
    result_div.innerHTML = computer.charAt(0).toUpperCase() + computer.slice(1) + ' beats ' + user.charAt(0).toUpperCase() + user.slice(1) + '. You LOSE😟'
}
function draw(user, computer) {
    result_div.innerHTML = computer.charAt(0).toUpperCase() + computer.slice(1) + ' equals ' + user.charAt(0).toUpperCase() + user.slice(1) + '. It\'s a draw😉 '
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice)
            break
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            lose(userChoice, computerChoice)
            break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice)
            break
    }
}
game()

function main() {

rock_div.addEventListener('click', function () {
    game('rock')
})
scissors_div.addEventListener('click', function () {
    game('scissors')
})
paper_div.addEventListener('click', function () {
    game('paper')
})
}

main()

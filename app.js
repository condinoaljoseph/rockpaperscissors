let userScore = 0;
let computerScore = 0;
const ElemUserScore = document.querySelector('#user-score');
const ElemCompScore = document.querySelector('#comp-score');
const ElemResult = document.querySelector('.result p')
const ElemRock = document.querySelector('#r')
const ElemPaper = document.querySelector('#p')
const ElemScissors = document.querySelector('#s')

function convertToWord(choice) {
  if(choice === 'r') return 'Rock'
  if(choice === 'p') return 'Paper'
  if(choice === 's') return 'Scissors'
}

function result(gameStatus, userChoice, computerChoice, className) {
  const ElemUserChoice = document.getElementById(userChoice);
  let message = ''
  switch(gameStatus) {
    case 'win':
    userScore++
    message1 = 'beats'
    message2 = 'You Win!'
      break
    case 'lose':
    computerScore++
    message1 = 'lost to'
    message2 = 'You Lose!'
      break   
    case 'draw':
    message1 = 'equals'
    message2 = 'Draw'
      break
  }

  ElemUserScore.textContent = userScore
  ElemCompScore.textContent = computerScore
  ElemResult.textContent = `${convertToWord(userChoice)} ${message1} ${convertToWord(computerChoice)}. ${message2}`
  ElemUserChoice.classList.add(className)
  setTimeout(() => ElemUserChoice.classList.remove(className), 300)
}

function getComputerChoice() {
  const choices = ['r', 'p', 's']
  const randomChoice = Math.floor((Math.random() * 3))
  return choices[randomChoice]
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case 'rs': case 'pr': case 'sp':
      result('win', userChoice, computerChoice, 'green-glow')
      break
    case 'rp': case 'ps': case 'sr':
      result('lose', userChoice, computerChoice, 'red-glow')
      break
    case 'rr': case 'pp': case 'ss':
      result('draw', userChoice, computerChoice, 'gray-glow')
      break
  }
}

function loadEventListeners() {
  ElemRock.addEventListener('click', () => game('r'))
  ElemPaper.addEventListener('click', () => game('p'))
  ElemScissors.addEventListener('click', () => game('s'))
}

loadEventListeners()
import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleElement = document.querySelector('#puzzle')
const guessCountElement = document.querySelector('#guesses')

let game

window.addEventListener('keypress', (e) => {

    game.makeGuess(String.fromCharCode(e.charCode))
    game.calculateStatus()
    render()
})

const render = () => {
    puzzleElement.innerHTML = ''
    guessCountElement.textContent = game.statusMessage

    const word = game.puzzle.split('')
    word.forEach((letter) => {
        const letterElement = document.createElement('span')
        letterElement.textContent = letter
        puzzleElement.appendChild(letterElement)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    game.status = 'Playing'
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)
startGame()
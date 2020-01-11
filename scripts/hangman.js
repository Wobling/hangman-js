class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'Playing'
    }

    get puzzle() {
        let puzzleWord = '' 
        
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzleWord += letter
            } else {
                puzzleWord += '*'
            }
        })
    
        return puzzleWord
    }

    makeGuess(guessedLetter) {
        if (this.status !== 'Playing') {
            return
        }
    
        guessedLetter = guessedLetter.toLowerCase()
    
        const isUniqueGuess = !this.guessedLetters.includes(guessedLetter)
        const isCorrectGuess = this.word.includes(guessedLetter)
    
        if (isUniqueGuess && isCorrectGuess) {
            this.guessedLetters.push(guessedLetter)
        } else if (isUniqueGuess) {
            this.remainingGuesses--
        }
    }

    calculateStatus() {
        let finished = false
    
        if (this.remainingGuesses === 0) {
            this.status = 'Failed'
            return
        }
    
        finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
    
        if (finished) {
            this.status = 'Finished'
        }
    }
    
    get statusMessage() {
        if (this.status === 'Playing') {
            return `Guesses left: ${this.remainingGuesses}`
    
        } else if (this.status === 'Failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else if (this.status === 'Finished') {
            return 'Great work!, You guessed the word.'
        }
    }
}






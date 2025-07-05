let random = (parseInt(Math.random() * 100 + 1))
// const guess = document.querySelector('#guess')
const userinput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p')

let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click' , function(e){
        e.preventDefault();
       const guess = parseInt(userinput.value)
       validateguess(guess)
    })
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    } else if(guess < 1){
        alert('please enter a valid number more than 1')
    } else if(guess > 100){
        alert('please enter a valid number less than 100')
    } else {
        prevguess.push(guess);
        if (numguess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over.Random Number was ${random}`)
            endGame()
        } else {
            displayGuess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess) {
    if (guess == random) {
        displayMessage('you guess is right')
    } else if(guess < random){
        displayMessage("your guess was too low")
    } else {
        displayMessage("you guesss was too high")
    }
}

function displayMessage(Message) {
    loworHi.innerHTML = `<h2>${Message}</h2>`
}


function displayGuess(guess) {
    userinput.value = ''
    guessSlot.innerHTML += `${guess}  `  
    numguess++;
    remaining.innerHTML = `${11 - numguess}`
}
function endGame() {
    userinput.value = ''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newgame">start new game</h2>`
    startOver.appendChild(p)
    playgame = false;
    NewGame()
}

function NewGame() {
    const newbtn = document.querySelector('#newgame')
    newbtn.addEventListener('click',(e)=>{
        random = (parseInt(Math.random() * 100 + 1));
        prevguess = []
        numguess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numguess}`
        userinput.removeAttribute('disabled')
        startOver.removeChild(p)
        playgame = true ;
    })
}
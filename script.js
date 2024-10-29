let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (userChoice === computerChoice) {
        result = 'Empate';
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijera') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijera' && computerChoice === 'papel')
    ) {
        result = '¡Ganaste!';
        userScore++;
    } else {
        result = 'Perdiste';
        computerScore++;
    }

    document.getElementById('result').innerText = `Tú: ${userChoice} - Computadora: ${computerChoice} => ${result}`;
    document.getElementById('score').innerText = `Tú: ${userScore} - Computadora: ${computerScore}`;

    if (userScore === 10) {
        alert('¡Felicidades! Has ganado el juego.');
        resetGame();
    } else if (computerScore === 10) {
        alert('La computadora ha ganado el juego. ¡Inténtalo de nuevo!');
        resetGame();
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById('score').innerText = `Tú: ${userScore} - Computadora: ${computerScore}`;
}

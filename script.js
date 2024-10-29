let userScore = 0;
let computerScore = 0;
let playerName = '';

function startGame() {
    playerName = document.getElementById('playerName').value;
    if (playerName.trim() === '') {
        alert('Por favor, ingresa tu nombre.');
        return;
    }
    document.getElementById('nameInput').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.getElementById('score').innerText = `${playerName}: 0 - Computadora: 0`;
}

function play(userChoice) {
    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';
    let resultClass = '';

    if (userChoice === computerChoice) {
        result = 'Empate';
        resultClass = '';
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijera') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijera' && computerChoice === 'papel')
    ) {
        result = '¡Ganaste!';
        resultClass = 'win';
        userScore++;
    } else {
        result = 'Perdiste';
        resultClass = 'lose';
        computerScore++;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = `${playerName}: ${userChoice} - Computadora: ${computerChoice} => ${result}`;
    resultElement.className = resultClass;

    document.getElementById('score').innerText = `${playerName}: ${userScore} - Computadora: ${computerScore}`;

    if (userScore === 10) {
        alert(`¡Felicidades, ${playerName}! Has ganado el juego.`);
        resetGame();
    } else if (computerScore === 10) {
        alert('La computadora ha ganado el juego. ¡Inténtalo de nuevo!');
        resetGame();
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById('score').innerText = `${playerName}: ${userScore} - Computadora: ${computerScore}`;
    document.getElementById('result').innerText = '';
    document.getElementById('result').className = '';
}

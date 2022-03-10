import Controller from './controller.js';

const controller = new Controller();

const nickname = document.getElementById("nickname");
const userInput = document.getElementById("user");
const startGameButton = document.getElementById("start-game-button");
const playAgainButton = document.getElementById("play-again");

document.addEventListener('DOMContentLoaded', () => {
    controller.preloadWords();
    nickname.focus();
});

nickname.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        if (nickname.value.length) {
            controller.preStartGame();
        } else {
            controller.showModal();
        }
    } 
});

startGameButton.addEventListener("click", () => {
    if (nickname.value.length) {
        controller.preStartGame();
    } else {
        controller.showModal();
    }
});

document.addEventListener("keydown", async(event) => {
    event.key == "Enter" && controller.verifyUserStaticInput();
});

userInput.addEventListener('input', async() => {
    controller.verifyUserDynamicInput();
});

playAgainButton.addEventListener("click", () => {
    controller.restartGame();
});
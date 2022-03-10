// Clase para renderizar todos los items
export default class View {
    constructor() {
        // HUD items
        this.word = document.getElementById("word");
        this.time = document.getElementById("time");
        this.spinner = document.getElementById("spinner");
        this.startButton = document.getElementById("start-game-button");
        this.restartButton = document.getElementById("play-again");
        // Dynamic content
        this.userInput = document.getElementById("user");
        this.wpm = document.getElementById("wpm");
        // Image input status
        this.success = document.getElementById("success");
        this.fail = document.getElementById("fail");
        // Player info
        this.nickname = document.getElementById("nickname");
    }
    // Cuenta regresiva para empezar el juego
    renderToastifyCountdown() {
        let totalTime = 3;
        this.showToastifyMessage("Prepárate", 1000);
        const countdownInterval = setInterval(() => {
            this.showToastifyMessage(`${totalTime}`, 1000);
            --totalTime;
            if (totalTime == 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);
    }

    renderWord(newWord) {
        this.word.innerHTML = newWord;
    }

    renderTime(newTime) {
        this.time.innerHTML = newTime;
    }

    renderWpm(newWpm) {
        this.wpm.innerHTML = newWpm;
    }

    renderSuccess() {
        this.success.hidden = false;
        this.fail.hidden = true;
    }

    renderFail() {
        this.success.hidden = true;
        this.fail.hidden = false;
    }
    // Renderizar mensaje que saludo al usuario con el nombre que ingresó al comenzar el juego
    renderMessage() {
        const initialMessage = document.getElementById("nickname-message");
        const newMessage = document.getElementById("message");

        initialMessage.hidden = true;
        this.nickname.hidden = true;
        
        newMessage.innerHTML = `¡Hola, ${this.nickname.value}!`;
        newMessage.hidden = false;
    }

    hideStartButton() {
        this.startButton.hidden = true;
    }

    hideSpinner() {
        this.spinner.style.opacity = "0.0";
    }

    hideRestartButton() {
        this.restartButton.hidden = true;
    }

    showRestartButton() {
        this.restartButton.hidden = false;
    }

    showSpinner() {
        this.spinner.style.opacity = "1.0";
    }
    // Renderizar un mensaje de toastify con el texto y los milisegundos como parámetro
    showToastifyMessage(message, miliseconds) {
        Toastify({
            text: message,
            duration: miliseconds,
            style: {
                background: 'linear-gradient(to right, #7f00ff, #e100ff'
            }
        }).showToast();
    }
    // Modal de sweet alert de error
    showModal() {
        swal({
            title: "Error!",
            text: "Debes ingresar un apodo para jugar",
            icon: "error",
            button: "Ok",
        });
    }

    focusUserInput() {
        this.userInput.focus();
    }

    clearUserInput() {
        this.userInput.value = "";
    }

    enableUserInput() {
        this.userInput.disabled = false;
    }

    disableUserInput() {
        this.userInput.disabled = true;
    }

    getUserInput() {
        return this.userInput.value;
    }

    getUserNickname() {
        return this.nickname.value;
    }
}
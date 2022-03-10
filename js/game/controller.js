import View from './view.js';
import Model from './model.js';
import StorageController from '../storage/controller.js';

export default class Controller {
    constructor () {
        this.view = new View();
        this.model = new Model();
        this.storageController = new StorageController();
        
        this.intervalRenderTimer = null;
        this.userWpm = null;
    }
    // Cargar las palabras del juego
    preloadWords() {
        this.model.generateWords();
    }
    // Acciones a realizar antes de que comience el juego
    preStartGame() {
        this.view.hideStartButton();
        this.view.hideRestartButton();
        this.view.renderMessage();
        this.view.renderToastifyCountdown();
        setTimeout(() => this.startGame(), 4000);
    }
    
    async startGame() {
        // Renderizar material complementario (Podría colocarse todo dentro de un método en la clase view)
        this.view.renderSuccess();
        this.view.showSpinner();
        this.view.enableUserInput();
        this.view.focusUserInput();
        // Renderizar elementos del juego
        this.view.renderWord(await this.model.getActualWord());
        this.model.startTimer();
        this.view.renderTime(60 - this.model.getTime());

        // Iniciamos el interval para renderizar el timer y el resultado de las WPM
        this.intervalRenderTimer = setInterval(() => {
            this.view.renderTime(60 - this.model.getTime());
            if (this.model.getTime() == 60) {
                this.view.disableUserInput();
                this.view.hideSpinner();
                clearInterval(this.intervalRenderTimer);
                this.userWpm = 300 - this.model.getSizeQueue();
                this.view.renderWpm(this.userWpm);
                this.view.showRestartButton();
                // Guardar el score
                this.saveScore();
            }
        }, 1000);
    }
    // Verificar la palabra del usuario al dar Enter
    async verifyUserStaticInput() {
        if (await this.model.verifyStaticInput(this.view.getUserInput())) {
            // Quitamos la primera palabra de la cola
            this.model.removeFirstWord();
            // Renderizamos la nueva primera palabra de la cola
            this.view.renderWord(await this.model.getActualWord());
            // Vaciamos el input del usuario
            this.view.clearUserInput();
        }
    }
    // Verificar la palabra del usuario con cada tecla que presiona
    async verifyUserDynamicInput() {
        (await this.model.verifyDynamicInput(this.view.getUserInput())) ? this.view.renderSuccess() : this.view.renderFail();
    }
    // Reiniciar el juego
    restartGame() {
        this.view.clearUserInput();
        this.model.restartItems();
        this.preloadWords();
        this.preStartGame();
    }
    // Mostrar modal de Error si el jugador no ingresa su apodo al querer jugar
    showModal() {
        this.view.showModal();
    }

    saveScore() {
        this.storageController.newRankManagement(this.view.getUserNickname(), this.userWpm);
    }
}
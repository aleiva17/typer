import Queue from './models/queue.js';
import Timer from './models/timer.js';
// Static imports
import Query from './models/query.js';
import Verifier from './models/verifier.js';

export default class Model {
    constructor() {
        this.queue = new Queue();
        this.timer = new Timer(60);
        this.intervalRenderTimer = null;
    }
    // Generar las 300 palabras para la sesión de juego
    generateWords() {
        for (let i = 0; i < 300; ++i) {
            this.addWordToQueue();
        }
    }

    startTimer() {
        this.timer.startTimer();
    }
    // Agregar una palabra a la queue (que se apoya en un array)
    addWordToQueue() {
        this.queue.push(Query.getWord());
    }
    // Remover la primera palabra de nuestra queue (que se apoya en un array)
    removeFirstWord() {
        this.queue.pop();
    }
    // Reiniciar el valor por defecto de la cola (a vacía) y creando un nuevo timer
    restartItems() {
        this.queue.clear();
        this.timer = new Timer(60);
    }
    // Verificar la palabra cuando el usuario da Enter
    async verifyStaticInput(userInput) {
        return Verifier.staticInput(userInput, await this.getActualWord());
    }
    // Verificar la palabra con cada letra que escribe el usuario
    async verifyDynamicInput(userInput) {
        return Verifier.dynamicInput(userInput, await this.getActualWord());
    }

    getActualWord() {
        return this.queue.getFront();
    }

    getSizeQueue() {
        return this.queue.getSize();
    }

    getTime() {
        return this.timer.getActualTime();
    }
}
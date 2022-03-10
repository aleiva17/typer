// Estructura de datos: Cola - Queue donde se almacenará las palabras
export default class Queue {
    constructor() {
        this.queue = [];
        this.numberOfElements = 0;
    }

    pop() {
        this.queue.shift();
        --this.numberOfElements;
    }

    push(element) {
        this.queue.push(element);
        ++this.numberOfElements;
    }

    clear() {
        this.queue = [];
        this.numberOfElements = 0;
    }

    getFront() {
        return this.queue[0];
    }

    getSize() {
        return this.numberOfElements;
    }
}
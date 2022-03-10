import DateHandler from "./dateHandler.js";
// Clase utilizada cuando se cree un nuevo Rank en model.js
export default class Rank {
    constructor(apodo, wpm) {
        this.apodo = apodo;
        this.wpm = wpm;
        this.fecha = DateHandler.getActualDate();
    }
}
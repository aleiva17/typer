import Rank from "./models/rank.js";

export default class Model {
    constructor() {
        // Cargar los ranks del local storage
        this.ranks = JSON.parse(localStorage.getItem("typer-rankings"));
        if (!this.ranks) {
            this.ranks = [];
        } else {
            // Seguridad por si se altera manualmente el arreglo del local storage
            this.sortRanks();
            this.filterTop10();
        }
    }

    addRank(apodo, wpm) {
        this.ranks.push(new Rank(apodo, wpm));
    }

    sortRanks() {
        this.ranks.sort((a, b) => b.wpm - a.wpm);
    }

    filterTop10() {
        if (this.ranks.length > 10) {
            this.ranks = this.ranks.slice(0, 10);
        }
    }

    saveRanks() {
        localStorage.setItem("typer-rankings", JSON.stringify(this.ranks));
    }

    getRanks() {
        return this.ranks;
    }
}
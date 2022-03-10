import Model from "./model.js";
import View from "./view.js";

export default class StorageController {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }
    // Agregar una nueva puntuación al ranking
    newRankManagement(apodo, wpm) {
        this.model.addRank(apodo, wpm);
        this.model.sortRanks();
        this.model.filterTop10();
        this.model.saveRanks();
    }
    // Cargar los ranks
    loadRanks() {
        this.view.renderRanks(this.model.getRanks());
    }
}
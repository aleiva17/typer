import StorageController from "./controller.js";

const controller = new StorageController();

document.addEventListener('DOMContentLoaded', () => {
    controller.loadRanks();
});
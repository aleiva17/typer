// Clase para obtener la fecha en el formato deseado al crear un Rank (constructor de rank.js)
export default class DateHandler {
    static getActualDate() {
        const date = new Date();
        return String(date.getDate()).padStart(2, '0') + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + date.getFullYear();
    }
}
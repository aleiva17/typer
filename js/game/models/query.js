// Clase para realizar las consultas al API y obtener la palabra aleatoria en model.js
export default class Query {
    static async getWord() {
        const url = "https://palabras-aleatorias-public-api.herokuapp.com/random";
        //const url2 = "https://random-word-api.herokuapp.com/word?lang=es&swear=0";
        const word = await fetch(url)
            .then(response => response.json())
            .then(data => data["body"]["Word"]);
        return word;
    }
}
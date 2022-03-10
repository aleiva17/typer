// Clase para verificar si el input del usuario coincide con la palabra
export default class Verifier {
    static staticInput(userInput, word) {
        return userInput == word;
    }

    static dynamicInput(userInput, word) {
        return userInput == word.substring(0, userInput.length);
    }
}
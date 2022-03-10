export default class View {
    constructor() {
        this.tableBody = document.getElementById("table-body");
    }
    // Render de cada uno de los ranks del array que se le pasa como parámetro
    renderRanks(ranks) {
        let i = 1;
        ranks.forEach(rank => {
            const {apodo, wpm, fecha} = rank;
            const row = document.createElement("tr");

            row.innerHTML = 
            `<th scope="row">${i++}</th>
            <td>${apodo}</td>
            <td>${wpm}</td>
            <td>${fecha}</td>`;

            this.tableBody.appendChild(row);
        });
    }
}
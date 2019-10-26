function addZero(num) {
    return num < 10 ? `0${num}` : num;
}

function addHtmlTableRow() {
    let quantidade = document.querySelector('#quantidade').value;
    
    for(let i = 1; i <= quantidade; i++) {
        let newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            cell6 = newRow.insertCell(5),
            cell7 = newRow.insertCell(6),
            numero1 = addZero(Math.floor(Math.random() * 100)),
            numero2 = addZero(Math.floor(Math.random() * 100)),
            numero3 = addZero(Math.floor(Math.random() * 100)),
            numero4 = addZero(Math.floor(Math.random() * 100)),
            numero5 = addZero(Math.floor(Math.random() * 100)),
            numero6 = addZero(Math.floor(Math.random() * 100));
            X = document.getElementById('X').value;

        cell1.innerHTML = numero1;
        cell2.innerHTML = numero2;
        cell3.innerHTML = numero3;
        cell4.innerHTML = numero4;
        cell5.innerHTML = numero5;
        cell6.innerHTML = numero6;
        cell7.innerHTML = `<button onClick="this.parentNode.parentNode.remove();">X</button>`;
    }
}

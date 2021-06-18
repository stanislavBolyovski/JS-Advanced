function sumTable() {
    let sum = 0;

    const cells = Array.from(document.querySelector('table').getElementsByTagName('td'));
    for (let i = 1; i < cells.length - 2; i += 2) {
        sum += Number(cells[i].innerText);
    }
    document.getElementById('sum').innerText = sum;
}
function colorize() {
    let rows = Array.from(document.getElementsByTagName('tr'));
    for (let index = 0; index < rows.length; index++) {
        if ((index % 2 !== 0) && (index !== 0)) {
            rows[index].style.background = 'Teal';
        }
    }
}
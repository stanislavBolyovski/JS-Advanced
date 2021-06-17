function extractText() {
    const a = document.querySelectorAll('li');
    const b = document.getElementById('result');
    let list = Array.from(a);
    let result = '';
    for (let element of list) {
        result = result + element.innerText + ' ';

    }

    b.innerText = result;
}
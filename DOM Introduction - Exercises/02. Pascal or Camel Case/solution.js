function solve() {
    let text = document.querySelector("#text").value;
    let type = document.querySelector("#naming-convention").value;
    let result;

    text = text.split(' ');

    if (type == "Camel Case") {
        text = text.map(x => x.charAt(0).toUpperCase() + x.slice(1));
        text[0] = text[0].charAt(0).toLowerCase() + text[0].slice(1);
        result = text.join('');
    } else if (type == "Pascal Case") {
        text = text.map(x => x.charAt(0).toUpperCase() + x.slice(1));
        result = text.join('');
    } else {
        result = 'Error!';
    }

    document.querySelector("#result").textContent = result;

}
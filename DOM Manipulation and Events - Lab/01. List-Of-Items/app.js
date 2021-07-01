function addItem() {
    let input = document.querySelector('#newItemText').value;
    let newContent = document.createTextNode(input);
    let newLi = document.createElement("li");
    let ul = document.querySelector('#items');
    newLi.appendChild(newContent);
    ul.appendChild(newLi);
    document.querySelector('#newItemText').value = '';
}
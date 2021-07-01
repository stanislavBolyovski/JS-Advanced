function addItem() {
    let aDelete = document.createTextNode('[Delete]');
    let newA = document.createElement("a");
    newA.href = "#";
    newA.appendChild(aDelete);

    let input = document.querySelector("#newItemText").value;
    let newCondent = document.createTextNode(input);
    let newLi = document.createElement("li");
    let items = document.querySelector("#items");

    newLi.appendChild(newCondent);
    newLi.appendChild(newA);
    items.appendChild(newLi);
    document.querySelector("#newItemText").value = '';


    newA.addEventListener("click", function() {
        document.querySelector('li:last-child').remove()
    });

}
function search() {
    let search = document.querySelector("#searchText").value;
    let towns = document.querySelector("#towns").innerText.split('\n');
    for (const element of towns) {
        if (search == element.slice(0, search.length)) {
            let index = towns.indexOf(element);
            let currentTown = document.querySelectorAll('li')[index];
            currentTown.style.textDecoration = 'underline';
            currentTown.style.fontWeight = 'bold';
        }
    }
}
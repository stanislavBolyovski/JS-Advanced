function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let search = document.querySelector("#searchField").value;
        let all = Array.from(document.querySelectorAll('tbody tr'));

        for (const element of all) {
            let filtered = element.innerText.split(`${search}`);
            if (filtered.length > 1) {
                element.classList.add("select");
            }
        }
    }
}
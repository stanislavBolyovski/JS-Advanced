function focused() {

    let inputElements = Array.from(document.querySelectorAll("input"));

    function highlight(a) {
        a.addEventListener('focus', function(event) {
            a.parentElement.classList.add("focused");
        });
    }

    function remove(b) {
        b.addEventListener('blur', function(event) {
            b.parentElement.classList.remove("focused");
            b.parentElement.classList.add("blured");
        });
    }

    for (const element of inputElements) {
        highlight(element);
        remove(element);
    }

}
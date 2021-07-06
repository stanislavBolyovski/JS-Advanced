function validate() {
    const emailInput = document.querySelector('#email');
    const regex = /^[^@]+@[^@]+\.[^@]+$/g
    emailInput.addEventListener('change', function() {
        const value = document.querySelector('#email').value;
        if (value.match(regex)) {
            return;
        } else {

            document.querySelector('#email').classList.add("error");
        }
    });
}
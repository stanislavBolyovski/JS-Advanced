function deleteByEmail() {
    let input = document.querySelector('input').value;
    let emails = document.querySelectorAll('td:last-child');
    for (let element of emails) {
        let currentEmail = element.innerHTML;
        if (currentEmail == input) {
            element.parentNode.remove();
            document.querySelector('#result').textContent = 'Deleted';
        }
    }
    if (document.querySelector('#result').textContent != 'Deleted') {

        document.querySelector('#result').textContent = 'Not Found';
    }
    document.querySelector('input').value = '';
}
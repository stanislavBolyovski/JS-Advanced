function toggle() {
    let button = document.querySelector('.button').innerText;
    let hidden = document.querySelector('#extra');
    if (button == 'MORE') {
        document.querySelector('#extra').style.display = "block";
        document.querySelector('.button').innerText = 'LESS';
    } else {
        document.querySelector('#extra').style.display = "none";
        document.querySelector('.button').innerText = 'MORE';
    }
}
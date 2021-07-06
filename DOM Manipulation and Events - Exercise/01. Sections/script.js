function create(words) {
    const div = document.querySelector('#content');
    //create a div with a paragraph with the string in it
    for (const element of words) {

        let newDiv = document.createElement("div");
        newDiv.id = 'div';
        let paragraph = document.createElement('p');
        paragraph.innerText = element;
        paragraph.style.display = 'none';
        newDiv.appendChild(paragraph);
        div.appendChild(newDiv);

        newDiv.addEventListener('click', function() {
            paragraph.style.display = 'block';
        });

    }

}
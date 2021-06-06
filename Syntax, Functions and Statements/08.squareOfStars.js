function stars(num) {
    let result;
    for (let i = 0; i < num; i++) {
        result = '';
        for (let j = 0; j < num; j++) {

            result += "* "
        }
        console.log(result);
    }
}

stars(3);
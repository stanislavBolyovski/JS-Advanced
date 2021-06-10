function biggest(matrix) {
    let resultArr = [];
    for (const arr of matrix) {
        for (const number of arr) {
            resultArr.push(number);
        }
    }
    console.log(Math.max(...resultArr));
}
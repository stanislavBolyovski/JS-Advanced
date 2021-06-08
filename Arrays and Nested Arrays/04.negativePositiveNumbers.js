function numbers(arr) {
    let resultArr = [];
    for (const number of arr) {
        if (number >= 0) {
            resultArr.push(number);
        } else {
            resultArr.unshift(number);
        }
    }
    for (const result of resultArr) {
        console.log(result);
    }
}
numbers([3, -2, 0, -1]);
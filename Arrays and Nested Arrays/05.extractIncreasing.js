function increasing(arr) {
    let resultArr = [];
    resultArr.push(arr.shift());
    for (const number of arr) {
        if (number > resultArr[resultArr.length - 1]) {
            resultArr.push(number);
        }
    }
    return resultArr;
}
increasing([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
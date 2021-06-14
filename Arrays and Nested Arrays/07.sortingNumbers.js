function sortNum(arr) {
    let length = arr.length;
    let resultArr = [];
    arr = arr.sort((a, b) => a - b);
    while (length !== resultArr.length) {
        resultArr.push(arr.shift());
        resultArr.push(arr.pop());
    }
    return resultArr;
}
sortNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
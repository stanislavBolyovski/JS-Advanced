function process(arr) {
    let resultArr = [];
    for (let i = 1; i < arr.length; i += 2) {
        resultArr.push(arr[i]);
    }
    resultArr = resultArr.reverse().map(x => x * 2).join(' ');
    console.log(resultArr);
}

process([10, 15, 20, 25]);
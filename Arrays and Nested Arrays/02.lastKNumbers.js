function last(num, add) {
    let arr = [1];
    while (arr.length < num) {
        let sum = 0;
        if (add > arr.length) {
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
        } else {
            for (let i = arr.length - add; i < arr.length; i++) {
                sum += arr[i];
            }
        }
        arr.push(sum);
    }
    console.log(arr);
}
last(8, 2);
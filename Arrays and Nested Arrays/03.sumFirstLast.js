function sum(arr) {
    let sum = 0;
    sum += Number(arr.shift());
    sum += Number(arr.pop())
    console.log(sum);
}

sum(['20', '30', '40']);
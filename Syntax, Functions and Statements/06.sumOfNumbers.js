function sum(n, m) {
    let sum = 0;
    for (let index = n; index <= m; index++) {
        sum += Number(index);
    }
    console.log(sum);
}

sum(1, 5);
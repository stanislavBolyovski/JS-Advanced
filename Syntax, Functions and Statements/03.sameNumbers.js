function same(num) {
    let str = num.toString();
    let sum = 0;
    let arr = [];
    let flag = true;
    for (let i = 0; i < num.toString().length; i++) {
        arr.push(str[i]);

    }

    arr.forEach(element => {
        sum += Number(element);
        if (arr[0] !== element) {
            flag = false;
        }
    });
    if (flag) {
        console.log(flag);
        console.log(sum);
    } else {
        console.log(flag);
        console.log(sum);
    }
}

same(2222222);
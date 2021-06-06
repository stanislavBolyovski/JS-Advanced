function area(num) {
    if (typeof num == 'number') {
        let area = Math.PI * num * num;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof num}.`);
    }
}

area('5');
function rotate(arr, num) {

    for (let i = 0; i < num; i++) {
        let last;
        last = arr.pop(arr[i]);
        arr.unshift(last);
    }
    console.log(arr.join(' '));
}

rotate(['Banana',
        'Orange',
        'Coconut',
        'Apple'
    ],
    15

);
function smallest(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr.splice(0, 2).join(' '));
}
smallest([30, 15, 50, 5]);
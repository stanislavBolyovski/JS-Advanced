function bigger(arr) {
    console.log(arr.sort((a, b) => a - b).splice(Math.floor(arr.length / 2)));
}
bigger([3, 19, 14, 7, 2, 19, 6]);
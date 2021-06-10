function diagonal(matrix) {
    let first = [];
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let num = Number(matrix.length) - 1;
        let cut = matrix[i][matrix.length - 1 - i];
        secondSum += cut;

        for (let j = 0; j < matrix[i].length; j++) {
            if (i == j) {
                first.push(matrix[i][j]);
            }
        }
    }
    first.forEach(element => {
        firstSum += element;
    });

    console.log(firstSum, secondSum);

}

diagonal([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);
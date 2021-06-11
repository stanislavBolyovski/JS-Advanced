function equal(matrix) {
    let a = matrix.length - 1;
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i == a) {
                break;
            } else {
                if (matrix[i][j] == matrix[i + 1][j]) {
                    count++;
                }

            }

        }
    }
    console.log(count);
}
equal([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);
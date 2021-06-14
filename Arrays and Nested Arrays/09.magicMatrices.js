function matrix(mat) {
    let flag = false;
    for (let i = 0; i < mat.length; i++) {

        let sumRow = 0;

        for (let j = 0; j < mat[i].length; j++) {

            sumRow += mat[i][j];

            console.log(mat[i][j]);
            i++;


        }
    }
}
matrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
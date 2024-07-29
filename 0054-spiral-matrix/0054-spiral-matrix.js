/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let sr = 0, ec = n-1, sc = 0, er = m-1;
    let result = []

    let count = m * n;

    while(count > 0){
        // sr
        for(let i = sc; i <= ec; i++){
            result.push(matrix[sc][i]);
            count--;
        }
        sr++;
        if(count == 0) break

        // ec
        for(let i = sr; i <= er; i++){
            result.push(matrix[i][ec]);
            count--
        }
        ec--;
        if(count == 0) break;

        // er
        for(let i = ec; i >= sc; i--){
            result.push(matrix[er][i]);
            count--;
        }
        er--;
        if(count == 0) break;

        //sc
        for(let i = er; i >= sr; i--){
            result.push(matrix[i][sc]);
            count--;
        }
        sc++;
        if(count == 0) break;
    }
    return result;
};
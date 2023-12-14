/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let onesRowi = new Array(rows).fill(0);
    let onesColj = new Array(cols).fill(0);
    let zerosRowi = new Array(rows).fill(0);
    let zerosColj = new Array(cols).fill(0);

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            onesRowi[i] += grid[i][j];
            onesColj[j] += grid[i][j];
            zerosRowi[i] += 1 - grid[i][j];
            zerosColj[j] += 1 - grid[i][j];
        }
    }

    const diff = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            diff[i][j] = onesRowi[i] + onesColj[j] - zerosRowi[i] - zerosColj[j];
        }
    }
    return diff;
};
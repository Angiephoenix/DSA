/**
 * @param {number[][]} mat
 * @return {number}
 */
 let numSpecial = function(mat) {
    const rows = mat.length; 
    const cols = mat[0].length; 
    let specialCount = 0; 

    const rowCount = new Array(rows).fill(0); 
    const colCount = new Array(cols).fill(0); 

    for (let i = 0; i < rows; i++) { 
        for (let j = 0; j < cols; j++) { 
            rowCount[i] += mat[i][j]; 
            colCount[j] += mat[i][j]; 
        }
    }

    for (let i = 0; i < rows; i++) { 
        for (let j = 0; j < cols; j++) { 
            if (mat[i][j] === 1 && rowCount[i] === 1 && colCount[j] === 1) {
                specialCount++; 
            }
        }
    }

    return specialCount; 
}

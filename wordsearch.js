// ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'], 
// ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
// ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
// ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
// ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
// ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
// ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
// ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
// ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));

    // Horizontal check of each index of the original array
    for (line of horizontalJoin) {
        if (line.includes(word)) {
            return true;
        }
    } 

    // Turn columns into rows of original array
    let transposedLetters = transpose(letters);
    // [                        
    //  [ 'T', 'O', 'M ]       [ ['T', 'S],  => [ 'TS'       ]
    //  [ 'S', 'A', "M"]   =>    ['O', 'A],       'OA'
    // ]                         ['M', 'M] ]      'MM'

    const verticalJoin = transposedLetters.map(ls => ls.join(''));

    // Horizontal check of verticalJoin
    for (line of verticalJoin) {
        if (line.includes(word)) {
            return true;
        }
    } 

    return false;
}

// Returns a transposed version of the passed 2-dimensional array.
  // [                        
    //  [ 'T', 'O', 'M ]       [ ['T', 'S]  
    //  [ 'S', 'A', "M"]   =>    ['O', 'A]
    // ]                         ['M', 'M] ]
const transpose = (letterVert) => {
    let transposedLilVert = [];

    for (let i = 0; i < letterVert[0].length; i++) {
        let transposedColumn = [];

        for (let j = 0; j < letterVert.length; j++) {
            transposedColumn.push(letterVert[j][i]);
        }
        
        transposedLilVert.push(transposedColumn);
    }

    // for (const row of letVert) {
    //     for (const col of row) {
    //         process.stdout.write(col + " ");
    //     }
    //     process.stdout.write('\n')
    // }

    // console.log(transpose)
    
    return transposedLilVert;
}

module.exports = wordSearch;
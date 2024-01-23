class SudokuSolver {

  validate(puzzleString) {
    let validate = {value: true, error: ''}
    if(puzzleString.length !== 81){
      validate = {value: false, error: 'Puzzle length is expected to be 81 characters long'}
      return validate;
    }
    for( let i = 0; i<=80; i++){
      switch(puzzleString[i]){
        case '0': break;
        case '1': break;
        case '2': break;
        case '3': break;
        case '4': break;
        case '5': break;
        case '6': break;
        case '7': break;
        case '8': break;
        case '9': break;
        case '.': break;
        default: 
          validate = { value: false, error: 'Puzzle characters expected to be numbers (0-9) and dots (.)'}
      }
    }
    return validate;
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
    
  }
}

module.exports = SudokuSolver;


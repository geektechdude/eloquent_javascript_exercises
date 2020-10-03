let size = 8;
let board_size = size*size;
let line = "";
let board ="";

for (let number = 0; number <= board_size; number +=1) {
    if (number % (size+1)==0) {
        line = line + "\n"
    }
    else if (number % 2 == 0){
        line = line + "#"
    }
    else {
        line = line + " "
    }
    if (board.length < board_size){
    board = board+line;
    line = "";
    }

}
console.log(board)
console.log(board.length);
  
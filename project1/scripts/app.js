$(document).ready(function(){

  // gameBoard.printBoard(gameBoard.columns);
  // player1.updateBoard(gameBoard);
  // console.log('player1 board:',player1.board);
  // console.log(gameBoard.columns[3]);
  // player1.playMove(gameBoard.columns[3]);
  // console.log(player1.color);
  // console.log(player1);
  // console.log(player2);

  player1.playMove(gameBoard.columns[3]);
  console.log(gameBoard.moves);
  player2.playMove(gameBoard.columns[3]);
  player1.playMove(gameBoard.columns[3]);
  player2.playMove(gameBoard.columns[3]);
  player1.playMove(gameBoard.columns[3]);
  player2.playMove(gameBoard.columns[3]);
  console.log(gameBoard.moves);





});

var gameBoard = {
  columns:[[],[],[],[],[],[],[]],

  printBoard:function(columns){
    console.log(this.columns);
  } , //end of printBoard method

  checkForWinner:function(){
    console.log('checking for winner... ... ...');

    for(var piece in columns[0]){
      console.log(columns[0][piece]);
    }

  },//end of checkForWinner method

  'moves':0

}//end gameBoard Object




function Player(color,board){
  this.color=color;

 this.playMove=function(column){
   if(column.length<6){
     column.push(color);
     this.row=column.length;
     console.log(row)
     board.moves++;
     if(board.moves>6){
       board.checkForWinner();
     }
   } else {
     console.log('please choose another move; there is no move room in that column! :D');
   }
   console.log('after player1 move the board state is:',board);
  };

 this.updateBoard=function(board){
    this.board=board;
  }
};



var player1 = new Player ('black',gameBoard);

var player2 = new Player ('red',gameBoard);

console.log(player1.color,player2.color);

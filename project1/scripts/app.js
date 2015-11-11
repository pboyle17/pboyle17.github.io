$(document).ready(function(){



  gameBoard.playConnectFour();


});//end of document.ready()

var gameBoard = {

  'lastMove':null,

  columns:[ [],[],[],[],[],[],[] ] ,

  printBoard:function(){
    console.log(this.columns);
  } , //end of printBoard method

  checkForWinner:function(){
    var moves=this.moves;
    var lastMove=this.lastMove;
    console.log(moves);
    console.log(lastMove);

    this.checkDown(lastMove);
    this.checkRight(lastMove);
    this.checkLeft(lastMove);




    if(moves>41){
      console.log('its a tie!');
    }
  },//end of checkForWinner method

  checkDown:function(lastMove){
    var testSquare=[lastMove[0],lastMove[1]-1];
    console.log(lastMove,testSquare);
    var colorLastMove=$('#row'+lastMove[1]+' > div.space.col-'+lastMove[0]).css('backgroundColor');
    var colorTestSquare=$('#row'+testSquare[1]+' > div.space.col-'+testSquare[0]).css('backgroundColor');
    console.log(colorLastMove,colorTestSquare);
    console.log(colorLastMove==colorTestSquare);
  },

  checkRight:function(lastMove){
    var testSquare=[lastMove[0]+1,lastMove[1]];
    console.log(lastMove,testSquare);
    var colorLastMove=$('#row'+lastMove[1]+' > div.space.col-'+lastMove[0]).css('backgroundColor');
    var colorTestSquare=$('#row'+testSquare[1]+' > div.space.col-'+testSquare[0]).css('backgroundColor');
    console.log(colorLastMove,colorTestSquare);
    console.log(colorLastMove==colorTestSquare);
  },

  checkLeft:function(lastMove){
    var testSquare=[lastMove[0]-1,lastMove[1]];
    console.log(lastMove,testSquare);
    var colorLastMove=$('#row'+lastMove[1]+' > div.space.col-'+lastMove[0]).css('backgroundColor');
    var colorTestSquare=$('#row'+testSquare[1]+' > div.space.col-'+testSquare[0]).css('backgroundColor');
    console.log(colorLastMove,colorTestSquare);
    console.log(colorLastMove==colorTestSquare);
  },

  'moves':0,


  playConnectFour:function(){
    var turn=true;

      $('.col-0').click(function(){
        if(turn){
          player1.makeAMove('0');
          turn=!turn;
        } else {
          player2.makeAMove('0');
          turn=!turn;
        }
      });
      $('.col-1').click(function(){
        if(turn){
          player1.makeAMove('1');
          turn=!turn;
        } else {
          player2.makeAMove('1');
          turn=!turn;
        }
      });
      $('.col-2').click(function(){
        if(turn){
          player1.makeAMove('2');
          turn=!turn;
        } else {
          player2.makeAMove('2');
          turn=!turn;
        }
      });
      $('.col-3').click(function(){
        if(turn){
          player1.makeAMove('3');
          turn=!turn;
        } else {
          player2.makeAMove('3');
          turn=!turn;
        }
      });
      $('.col-4').click(function(){
        if(turn){
          player1.makeAMove('4');
          turn=!turn;
        } else {
          player2.makeAMove('4');
          turn=!turn;
        }
      });
      $('.col-5').click(function(){
        if(turn){
          player1.makeAMove('5');
          turn=!turn;
        } else {
          player2.makeAMove('5');
          turn=!turn;
        }
      });
      $('.col-6').click(function(){
        if(turn){
          player1.makeAMove('6');
          turn=!turn;
        } else {
          player2.makeAMove('6');
          turn=!turn;
        }
      });
    }// end of playConnectFour method
};//end gameBoard Object

function Player(color,board){
  this.color=color;
  this.lastMoveRow=0;
  this.columnLabel=null;
 this.makeAMove=function(column){
   //max sure the board does not go past 6 rows high; let the player know if they cannot play a piece in that column

   //semantics with naming of columns
   this.lastMoveColumn=column;
   if(gameBoard.columns[column].length<6){

     gameBoard.columns[column].push(color);
     this.lastMoveRow=gameBoard.columns[column].length-1;
     this.columnLabel=parseInt(column);
     this.renderPiece();
     board.moves++;
     //once 7 moves have been played there is a possibility for a winner;check for it
   } else {
     //cannot play anymore pieces to this column; invalid move
     console.log('please choose another move; there is no move room in that column! :D');
   }
  //  console.log('after player1 move the board state is:',board);
 };//end of playMove

  this.renderPiece=function(){
    var col=this.columnLabel;
    var row=this.lastMoveRow.toString();
    gameBoard.lastMove=[col,parseInt(row)];

    $('#row'+row+'> div.space.col-'+col).css('background-color',color);
    if(board.moves>5){
      board.checkForWinner();
    }
  };//end of renderPiece function

};// end of Player constructor function



var player1 = new Player ('black',gameBoard);
var player2 = new Player ('red',gameBoard);

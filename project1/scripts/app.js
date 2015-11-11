$(document).ready(function(){



  gameBoard.playConnectFour();


});//end of document.ready()

var gameBoard = {

  columns:[ [],[],[],[],[],[],[] ] ,

  printBoard:function(){
    console.log(this.columns);
  } , //end of printBoard method

  checkForWinner:function(){
    console.log('checking for winner... ... ...');

  },//end of checkForWinner method

  'moves':0,


  playConnectFour:function(){
    var moves=this.moves;
    var turnBlack=true;
    console.log(moves,turnBlack);


    while(this.moves<10){

      if(turnBlack){
        $('.col-1').click(function(){
          player1.makeAMove('0');
          break;
        });
        $('.col-2').click(function(){
          player1.makeAMove('1');
          break;
        });
        $('.col-3').click(function(){
          player1.makeAMove('2');
          break;
        });
        $('.col-4').click(function(){
          player1.makeAMove('3');
          break;
        });
        $('.col-5').click(function(){
          player1.makeAMove('4');
          break;
        });
        $('.col-6').click(function(){
          player1.makeAMove('5');
          break;
        });
        $('.col-7').click(function(){
          player1.makeAMove('6');
          break;
        });
      } else {
        $('.col-1').click(function(){
          player2.makeAMove('0');
          break;
        });
        $('.col-2').click(function(){
          player2.makeAMove('1');
          break;
        });
        $('.col-3').click(function(){
          player2.makeAMove('2');
          break;
        });
        $('.col-4').click(function(){
          player2.makeAMove('3');
          break;
        });
        $('.col-5').click(function(){
          player2.makeAMove('4');
          break;
        });
        $('.col-6').click(function(){
          player2.makeAMove('5');
          break;
        });
        $('.col-7').click(function(){
          player2.makeAMove('6');
          break;
        });
      }//end of if-else

      turnBlack=!turnBlack;
      console.log('turn:',turnBlack);
    }//end of while loop


  }//end gameBoard Object

function Player(color,board){
  this.color=color;
  this.lastMoveRow=1;
  this.columnLabel=null;
 this.makeAMove=function(column){
   //max sure the board does not go past 6 rows high; let the player know if they cannot play a piece in that column

   //semantics with naming of columns
   this.lastMoveColumn=column-1;
   if(gameBoard.columns[column].length<6){

     gameBoard.columns[column].push(color);
     this.lastMoveRow=gameBoard.columns[column].length; //need to add one naming conventions with rows
     this.columnLabel=parseInt(column);
     console.log(this);
     this.renderPiece();
     board.moves++;
     //once 7 moves have been played there is a possibility for a winner;check for it
     if(board.moves>6){
       board.checkForWinner();
     }
   } else {
     //cannot play anymore pieces to this column; invalid move
     console.log('please choose another move; there is no move room in that column! :D');
   }
  //  console.log('after player1 move the board state is:',board);
 };//end of playMove

  this.renderPiece=function(){
    var col=this.columnLabel;
    var row=this.lastMoveRow.toString();

    console.log(color);
    console.log('row',row,'col',col);
    $('#row'+row+'> div.space.col-'+col).css('background-color',color);
  };//end of renderPiece function

};// end of Player constructor function



var player1 = new Player ('black',gameBoard);
var player2 = new Player ('red',gameBoard);

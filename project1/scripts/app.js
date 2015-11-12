

$(document).ready(function(){

  gameBoard.playConnectFour();
});//end of document.ready()
var gameBoard = {
  //each empty array represents a column in the connect for board.
  columns:[ [],[],[],[],[],[],[] ] ,
  //each direction is an array length of 2 that when added to any piece coordinates will transform those coordinates to another space representing a change in that given direction.
  directions:{
    right:[1,0],
    left:[-1,0],
    down:[0,-1],
    diagUpRight:[1,1],
    diagUpLeft:[-1,1],
    diagDownRight:[1,-1],
    diagDownLeft:[-1,-1]
  },

//an object that holds coordinates for a pieces that make a run of x number of pieces in a row.
  spacesInARow:{
    'first':[],
    'second':[],
    'third':[],
    'fourth':[],
  },

//method that resets the spaces in a row object to empty arrays
  resetSpacesInARow:function(){
    gameBoard.spacesInARow.first=[];
    gameBoard.spacesInARow.second=[];
    gameBoard.spacesInARow.third=[];
    gameBoard.spacesInARow.fourth=[];
  },

//set the coordinates of last move called in ln 427
  setLastMove:function(arr){
    gameBoard.lastMove=arr;

    // console.log('last move set');
  },

//  difference arr (directions ln 9) to transform lastMove coordinates to testSpace coordinates. add the columns of both arrays and the rows of both arrays
  setTestSpace:function(diff){
    gameBoard.testSpace=[gameBoard.lastMove[0]+diff[0],gameBoard.lastMove[1]+diff[1]]
    // console.log('test move set:',gameBoard.testSpace)
  },

  winMessage: function () {
    gameBoard.winner=true;
    $('.space').off()
    console.log('click events removed');
      if(gameBoard.turn){
      console.log('you won black!');
      $('#title').html('You won Black!!!!!');
        setTimeout(function(){
          location.reload();
        },3000)
    } else {
      console.log('you won red!');
      // alert('you won red!');
      $('#title').html('You won Red!!!');
      setTimeout(function(){
        location.reload();
      },3000)
    }
  },

//find a color of some coordinates selecting with jQuery and usings $.css to get the value of background color and return that value;
  findColor:function(arr){
    var color=$('#row'+arr[1]+' > div.space.col-'+arr[0]).css('backgroundColor');
    return color;
  },

//compare color of two different spaces;returns a BOOLEAN, uses method findColor(arr) ln:49 to grab the color of a set of coordinates
  compareColor:function(space1,space2){
    if(gameBoard.findColor(space1)==gameBoard.findColor(space2)){
      // console.log('the colors!!! they match!!!!');
      // console.log('============================');
      return true;
    } else {
      return false;
    }

  },

  // render:function(){
  //   if(gameBoard.turn){
  //     player1.makeAMove('0');
  //     gameBoard.turn=!gameBoard.turn;
  //     $('#title').empty().append("Red's turn");
  //   } else {
  //     player2.makeAMove('0');
  //     gameBoard.turn=!gameBoard.turn;
  //     $('#title').empty().append("Black's Turn");
  //   }
  // },

  // incrementInARowCount:function(){
  //   gameBoard.inARowCount++;
  //   console.log('nice you have:',gameBoard.inARowCount,'in a row in the!!!')
  // },




//check to see if winning game state for either player;
  checkForWinner:function(direction){
    // console.log('checking to see if there is a winner');
    // console.log('=====================================')
      gameBoard.resetSpacesInARow(); // ln 30
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      // console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.right)){//checkmatch ln
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        // console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.right)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.right)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            // console.log('winner winner winner!!!!');

            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col);
              $(selector).css('background-color','rgb(162, 145, 57)');
            }
            gameBoard.winMessage();
          }
        } else {
          // console.log('no winners yet')
        }
      } else {
        // console.log('nope no winners yet');
      }

      gameBoard.resetSpacesInARow();
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      // console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.left)){
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        // console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.left)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.left)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            // console.log('winner winner winner!!!!');
            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col)
              $(selector).css('background-color','rgb(162, 145, 57)');

            }
            gameBoard.winMessage();

          }
        } else {
          // console.log('no winners yet')
        }
      } else {
        // console.log('nope no winners yet');
      }

      gameBoard.resetSpacesInARow();
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      // console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.diagUpLeft)){
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        // console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.diagUpLeft)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.diagUpLeft)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            // console.log('winner winner winner!!!!');
            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col)
              $(selector).css('background-color','rgb(162, 145, 57)');
            }
            gameBoard.winMessage();

          }
        } else {
          // console.log('no winners yet')
        }
      } else {
        // console.log('nope no winners yet');
      }

      gameBoard.resetSpacesInARow();
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      // console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.diagUpRight)){
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        // console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.diagUpRight)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.diagUpRight)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            // console.log('winner winner winner!!!!');
            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col)
              $(selector).css('background-color','rgb(162, 145, 57)');
            }
            gameBoard.winMessage();

          }
        } else {
          // console.log('no winners yet')
        }
      } else {
        // console.log('nope no winners yet');
      }
      gameBoard.resetSpacesInARow();
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      // console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.diagDownRight)){
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        // console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.diagDownRight)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.diagDownRight)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            // console.log('winner winner winner!!!!');
            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col)
              $(selector).css('background-color','rgb(162, 145, 57)');
            }
            gameBoard.winMessage();

          }
        } else {
          // console.log('no winners yet')
        }
      } else {
        // console.log('nope no winners yet');
      }

      gameBoard.resetSpacesInARow();
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      // console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.diagDownLeft)){
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        // console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.diagDownLeft)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.diagDownLeft)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            // console.log('winner winner winner!!!!');
            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col)
              $(selector).css('background-color','rgb(162, 145, 57)');
            }
            gameBoard.winMessage();

          }
        } else {
          // console.log('no winners yet')
        }
      } else {
        // console.log('nope no winners yet');
      }

      gameBoard.resetSpacesInARow();
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      // console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.down)){
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        // console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.down)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.down)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            // console.log('winner winner winner!!!!');
//
            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col)
              $(selector).css('background-color','rgb(162, 145, 57)');
            }
            gameBoard.winMessage();

          }
        } else {
          // console.log('no winners yet')
        }
      } else {
        // console.log('nope no winners yet');
      }





  },//end of checkForWinner method

//test space diff is an arr length of two in which i can transform to last move to the testmove space RETURNS BOOLEAN
  checkMatch:function(direction){
    gameBoard.setTestSpace(direction);
    gameBoard.findColor(gameBoard.lastMove);
    gameBoard.findColor(gameBoard.testSpace);
    if(gameBoard.compareColor(gameBoard.lastMove,gameBoard.testSpace)){
      // console.log('direction',direction);
      return true;
    } else {
      return false;
    }
  },

  playConnectFour:function(){
    gameBoard.winner=false;
    gameBoard.turn=true;
    var turn = gameBoard.turn;

    gameBoard.moves=0;
    gameBoard.inARowCount=1;


//Set event listener to every column if its blacks turn add a black piece , else add a red piece
      $('.col-0').on('click',function(){
        if(gameBoard.turn){
          player1.makeAMove('0');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
          $('#title').empty().append("Red's Turn");
        }
        } else {
          player2.makeAMove('0');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
          $('#title').empty().append("Black's Turn");
          }
        }
      });
      $('.col-1').on('click',function(){
        if(gameBoard.turn){
          player1.makeAMove('1');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
          $('#title').empty().append("Red's turn");
          }
        } else {
          player2.makeAMove('1');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
          $('#title').empty().append("Black's turn");
          }
        }
      });
      $('.col-2').on('click',function(){
        if(gameBoard.turn){
          player1.makeAMove('2');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
            $('#title').empty().append("Red's turn");
          }
        } else {
          player2.makeAMove('2');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
            $('#title').empty().append("Black's turn");
          }
        }
      });
      $('.col-3').on('click',function(){
        if(gameBoard.turn){
          player1.makeAMove('3');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
            $('#title').empty().append("Red's turn");
          }
        } else {
          player2.makeAMove('3');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
            $('#title').empty().append("Black's turn");
          }
        }
      });
      $('.col-4').on('click',function(){
        if(gameBoard.turn){
          player1.makeAMove('4');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
            $('#title').empty().append("Red's turn");
          }
        } else {
          player2.makeAMove('4');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
            $('#title').empty().append("Black's turn");
          }
        }
      });
      $('.col-5').on('click',function(){
        if(gameBoard.turn){
          player1.makeAMove('5');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
            $('#title').empty().append("Red's turn");
          }
        } else {
          player2.makeAMove('5');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
            $('#title').empty().append("Black's turn");
          }
        }
      });
      $('.col-6').on('click',function(){
        if(gameBoard.turn){
          player1.makeAMove('6');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
            $('#title').empty().append("Red's Turn");
          }
        } else {
          player2.makeAMove('6');
          gameBoard.turn=!gameBoard.turn;
          if(gameBoard.winner==false){
            $('#title').empty().append("Black's Turn");
          }
        }
      });
      // $('.col-1').click(gameBoard.render());
      // $('.col-2').click(gameBoard.render());
      // $('.col-3').click(gameBoard.render());
      // $('.col-4').click(gameBoard.render());
      // $('.col-5').click(gameBoard.render());
      // $('.col-6').click(gameBoard.render());
      // $('.col-0').click(gameBoard.render());
    }// end of playConnectFour method
};//end gameBoard Object


//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
function Player(color,board){
  this.color=color;
  this.lastMoveRow=0;
  this.columnLabel=null;
 this.makeAMove=function(column){
   //max sure the board does not go past 6 rows high; let the player know if they cannot play a piece in that column

   //semantics with naming of columns
   this.lastMoveColumn=column;
   if(gameBoard.columns[column].length<6){
     //if a valid move push color to the array representing the board
     gameBoard.columns[column].push(color);
     this.lastMoveRow=gameBoard.columns[column].length-1;
     this.columnLabel=parseInt(column);
     gameBoard.setLastMove([gameBoard.columns[column].length-1,parseInt(column)]);
     this.renderPiece();//ln 438
     gameBoard.moves++;
     //once 7 moves have been played there is a possibility for a winner;check for it
   } else {
     //cannot play anymore pieces to this column; invalid move
     console.log('please choose another move; there is no move room in that column! :D');
   }
  //  console.log('after player1 move the board state is:',board);
 };//end of playMove

  this.renderPiece=function(){
    //reintialize all matching varialbes to null
    gameBoard.matchDown=0;
    gameBoard.matchLeft=0;
    gameBoard.matchRight=0;
    gameBoard.matchDiagUpLeft=0;
    gameBoard.matchDiagUpRigh=0;
    gameBoard.matchDiagDownLeft=0;
    gameBoard.matchDiagDownRight=0;


    var col=this.columnLabel;
    var row=this.lastMoveRow.toString();
    gameBoard.lastMove=[col,parseInt(row)];
    //colors a particular square color depend which played played the move. color is an argument in the constructor function 463 464
    $('#row'+row+'> div.space.col-'+col).css('background-color',color);
    if(board.moves>5){
      board.checkForWinner();
    }
  };//end of renderPiece function

};// end of Player constructor function

var player1 = new Player ('rgb(18, 25, 34)',gameBoard);
var player2 = new Player ('rgb(116, 13, 31)',gameBoard);

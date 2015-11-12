$(document).ready(function(){

  gameBoard.playConnectFour();
});//end of document.ready()
var gameBoard = {
  columns:[ [],[],[],[],[],[],[] ] ,
  directions:{
    right:[1,0],
    left:[-1,0],
    down:[0,-1],
    diagUpRight:[1,1],
    diagUpLeft:[-1,1],
    diagDownRight:[1,-1],
    diagDownLeft:[-1,-1]
  },

  spacesInARow:{
    'first':[],
    'second':[],
    'third':[],
    'fourth':[],
  },

  resetSpacesInARow:function(){
    gameBoard.spacesInARow.first=[];
    gameBoard.spacesInARow.second=[];
    gameBoard.spacesInARow.third=[];
    gameBoard.spacesInARow.fourth=[];
  },

//coordinates of last move
  setLastMove:function(arr){
    gameBoard.lastMove=arr;
    console.log('last move set');
  },

//difference arr to transform lastMove coordinates to testSpace coordinates
  setTestSpace:function(diff){
    gameBoard.testSpace=[gameBoard.lastMove[0]+diff[0],gameBoard.lastMove[1]+diff[1]]
    console.log('test move set:',gameBoard.testSpace)
  },

//find a color of some coordinates
  findColor:function(arr){
    var color=$('#row'+arr[1]+' > div.space.col-'+arr[0]).css('backgroundColor');
    return color;
  },

//compare color of two different spaces
  compareColor:function(space1,space2){

    if(gameBoard.findColor(space1)==gameBoard.findColor(space2)){
      console.log('the colors!!! they match!!!!');
      console.log('============================');
      return true;
    } else {
      return false;
    }

  },

  // incrementInARowCount:function(){
  //   gameBoard.inARowCount++;
  //   console.log('nice you have:',gameBoard.inARowCount,'in a row in the!!!')
  // },




//check to see if winning game state for either player;
  checkForWinner:function(direction){
    console.log('checking to see if there is a winner');
    console.log('=====================================')


      gameBoard.resetSpacesInARow();
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.right)){
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.right)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.right)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            console.log('winner winner winner!!!!');

            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col);
              $(selector).css('background-color','gold');

            }
          }
        } else {
          console.log('no winners yet')
        }
      } else {
        console.log('nope no winners yet');
      }

      gameBoard.resetSpacesInARow();
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.left)){
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.left)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.left)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            console.log('winner winner winner!!!!');
            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col)
              $(selector).css('background-color','gold');

            }
          }
        } else {
          console.log('no winners yet')
        }
      } else {
        console.log('nope no winners yet');
      }

      gameBoard.resetSpacesInARow();
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.diagUpLeft)){
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.diagUpLeft)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.diagUpLeft)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            console.log('winner winner winner!!!!');
            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col)
              $(selector).css('background-color','gold');
            }
          }
        } else {
          console.log('no winners yet')
        }
      } else {
        console.log('nope no winners yet');
      }

      gameBoard.resetSpacesInARow();
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.diagUpRight)){
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.diagUpRight)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.diagUpRight)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            console.log('winner winner winner!!!!');
            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col)
              $(selector).css('background-color','gold');
            }
          }
        } else {
          console.log('no winners yet')
        }
      } else {
        console.log('nope no winners yet');
      }
      gameBoard.resetSpacesInARow();
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.diagDownRight)){
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.diagDownRight)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.diagDownRight)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            console.log('winner winner winner!!!!');
            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col)
              $(selector).css('background-color','gold');
            }
          }
        } else {
          console.log('no winners yet')
        }
      } else {
        console.log('nope no winners yet');
      }

      gameBoard.resetSpacesInARow();
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.diagDownLeft)){
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.diagDownLeft)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.diagDownLeft)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            console.log('winner winner winner!!!!');
            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col)
              $(selector).css('background-color','gold');
            }
          }
        } else {
          console.log('no winners yet')
        }
      } else {
        console.log('nope no winners yet');
      }

      gameBoard.resetSpacesInARow();
      gameBoard.spacesInARow.first=gameBoard.lastMove;
      console.log(gameBoard.spacesInARow.first);
      if(gameBoard.checkMatch(gameBoard.directions.down)){
        gameBoard.spacesInARow.second=gameBoard.testSpace;
        gameBoard.lastMove=gameBoard.testSpace;
        console.log(gameBoard.lastMove);
        if(gameBoard.checkMatch(gameBoard.directions.down)){
          gameBoard.spacesInARow.third=gameBoard.testSpace;
          gameBoard.lastMove=gameBoard.testSpace;
          if(gameBoard.checkMatch(gameBoard.directions.down)){
            gameBoard.spacesInARow.fourth=gameBoard.testSpace;
            console.log('winner winner winner!!!!');
            for(var spaces in gameBoard.spacesInARow){
              var row = gameBoard.spacesInARow[spaces][1];
              var col = gameBoard.spacesInARow[spaces][0];
              var selector = $('#row'+row+'> div.space.col-'+col)
              $(selector).css('background-color','gold');
            }
          }
        } else {
          console.log('no winners yet')
        }
      } else {
        console.log('nope no winners yet');
      }





  },//end of checkForWinner method

//test space diff is an arr length of two in which i can transform to last move to the testmove space RETURNS BOOLEAN
  checkMatch:function(direction){
    gameBoard.setTestSpace(direction);
    gameBoard.findColor(gameBoard.lastMove);
    gameBoard.findColor(gameBoard.testSpace);
    if(gameBoard.compareColor(gameBoard.lastMove,gameBoard.testSpace)){
      console.log('direction',direction);
      return true;
    } else {
      return false;
    }
  },

  playConnectFour:function(){
    var turn = gameBoard.turn
    turn=true;
    if(turn==true){
      $('#title').empty().append('Black\'s Turn!');
    }
    if(turn==false){
      $('#title').empty().append('Red\'s Turn!');
    }
    gameBoard.moves=0;
    gameBoard.inARowCount=1;

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

     gameBoard.columns[column].push(color);
     this.lastMoveRow=gameBoard.columns[column].length-1;
     this.columnLabel=parseInt(column);
     gameBoard.setLastMove([gameBoard.columns[column].length-1,parseInt(column)]);
     this.renderPiece();
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

    $('#row'+row+'> div.space.col-'+col).css('background-color',color);
    if(board.moves>5){
      board.checkForWinner();
    }
  };//end of renderPiece function

};// end of Player constructor function



var player1 = new Player ('black',gameBoard);
var player2 = new Player ('red',gameBoard);

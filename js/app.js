const field = document.querySelectorAll('.field');
const gameField = document.getElementById('game-field');
const overlayContainer = document.querySelector('.overlay-container');
const winnerMessage = document.querySelector('.winner-message');
const buttonClose = document.querySelector('.close-btn');
let orderMove = 0;
let winner = '';

function fieldClick(event){
   if(event.target.className = 'field'){
      orderMove % 2 == 0 ? event.target.textContent = 'x': event.target.textContent = '0';
      orderMove++;
   }
   findWinner();
}

const winFields = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];

function findWinner(){
   for(let i = 0; i < winFields.length; i++){
      if((field[winFields[i][0]].textContent == 'x') && (field[winFields[i][1]].textContent == 'x') && (field[winFields[i][2]].textContent == 'x')){
         winner = 'крестики';
         overlayContainer.style.visibility = 'visible';  
         winnerMessage.textContent = 'Победили ' +winner+', поздравляем!';
      }else if((field[winFields[i][0]].textContent == '0') && (field[winFields[i][1]].textContent == '0') && (field[winFields[i][2]].textContent == '0')){         
         winner = 'нолики';
         overlayContainer.style.visibility = 'visible';  
         winnerMessage.textContent = 'Победили ' +winner+', поздравляем!';       
      }
   }
   if((orderMove > winFields.length) && (winner == '')){
      overlayContainer.style.visibility = 'visible';  
      winnerMessage.textContent = 'В этот раз никто не выиграл, попробуйте снова';
   }
}
gameField.addEventListener('click', fieldClick);
buttonClose.addEventListener('click', () => {
   overlayContainer.style.visibility = 'hidden';
   location.reload();
});
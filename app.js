document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')

  for (var i = 0, len = squares.length; i < len; i++)

  (function(index) {
    //ad an onclick to each square in your grid
      squares[1].onclick = function() {
    //if the squares below your current square is taken, you can go ontop of it
      if(squares[index + 7].classList.contains('taken')) {
        if (currentPlayer === 1) {
          squares[index].classList.add('taken')
          squares[index].classList.add('player-one')
          //change the Player
          currentPlayer = 2
          displayCurrentPlayer.innerHTML = currentPlayer
        } else if (currentPlayer === 2) {
            squares[index].classList.add('taken')
            squares[index].classList.add('player-one')
            //change the player
            currentPlayer = 1
            displayCurrentPlayer.innerHTML = currentPlayer
          }
          //if the square below your 
      }
    }

  
  })


})
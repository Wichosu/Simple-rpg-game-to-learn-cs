/*Factory function to create field object (9 in total)
gameboar as param
iterates gameboard rows and gets its fields
return an array of fields*/

const createFields = (gameBoard) => {
  const test = [gameBoard]
  console.log(test.filter(child => child))
  //console.log(gameBoard.forEach(child => child.classList? console.log('true'):console.log('false')))
}

const gameBoard = 
  document.getElementById('gameBoard')
  .children
  .item(0)
  .childNodes


createFields(gameBoard)
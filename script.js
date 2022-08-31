/*Factory function key idea
Create objects for what they do not what they are*/

/*field = switcher + scratch + clickable
rows = winCondition
cols = winCondiction
diagonals = winCondition*/

const switcher = (element) => {
  element.textContent === 'X'? element.textContent = '' : element.textContent = 'X'
}


const fields = document.querySelectorAll('#field')

const newField = switcher(fields[1])
const secondField = fields[0]
console.log(newField)
console.log(secondField)


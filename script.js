const gameBoard = (() => {
  let _fields = new Array(9);
  
  const getFieldElement = (row, field) => {
    const htmlRow = document.querySelector(`.row:nth-child(${row})`);
    const htmlField = htmlRow.cells.item(field);
    return htmlField;
  }

  const markField = (field, mark) => {
    field.textContent = mark;//add 'X' or 'O' to element

    let totalRows = 3;
    let fieldIndex = field.cellIndex; //plus one to prevent multiplying for 0
    let rowIndex = field.parentElement.rowIndex;//plus one to prevent multiplying for 0
    let arrayIndex = (rowIndex * totalRows) + fieldIndex;
    
    _fields[arrayIndex] = true

  }

  return {
    getFieldElement,
    markField
  }
})();

gameBoard.markField(gameBoard.getFieldElement(1, 1), 'X')

const player = () => {
  
}

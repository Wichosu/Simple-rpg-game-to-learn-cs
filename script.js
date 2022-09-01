/*Factory function key idea
Create objects for what they do not what they are*/

/*field = switcher + scratch  + figure
rows = winCondition
cols = winCondiction
diagonals = winCondition*/

const switcher = {
  changeStatus(status) {
    return !status
  }
}

const figure = {
  figure: '',
  getFigure() {
    return this.figure;
  },
  setFigure(value) {
    if(value === 'X') {
      this.figure = 'O';
    }
    else{
      this.figure = 'X';
    }
  }
}

/*const switcher = (element) => {
  element.textContent === 'X'? element.textContent = '' : element.textContent = 'X'
}*/

/*const clickable = (element) => {
  element.style.cursor = 'pointer';
  element.value = !element.value;
  console.log(element.value);
}*/

const fields = document.querySelectorAll('#field');

const field = (Element, Switcher) => {
  const switcher = Object.create(Switcher);
  const props = {
    element: Element,
    checked: false,
  };
  
  const log = () => {
    console.log(figure.getFigure())
  }

  const draw = () => {
    if(!props.checked){
      props.checked = switcher.changeStatus(props.checked);
      figure.setFigure(figure.getFigure())
      props.element.textContent = figure.getFigure()
    }
  }

  props.element.addEventListener('click', draw);
  props.element.addEventListener('click', log);
}

fields.forEach(element => element = field(element, switcher))


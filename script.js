/*Factory function key idea
Create objects for what they do not what they are*/

/*field = switcher + scratch + clickable
rows = winCondition
cols = winCondiction
diagonals = winCondition*/

const switcher = {
  change(status) {
    return !status
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
    checked: false
  };
  
  const log = () => {
    console.log(props.element);
  }

  const draw = () => {
    props.checked = switcher.change(props.checked)
    props.checked? props.element.textContent = 'X' : props.element.textContent = '';
  }

  props.element.addEventListener('click', draw);
  props.element.addEventListener('click', log);
}

const field1 = field(fields[0], switcher)


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
    element: Object.create(Element),
    checked: false
  };

  return {
    log() {
      console.log(props.element);
    },
    draw() {
      props.checked = switcher.change(props.checked)
    }
  }
}

const field1 = field(fields[0], switcher)

field1.log()



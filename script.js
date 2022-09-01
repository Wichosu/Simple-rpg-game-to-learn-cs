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

const clickable = (element) => {
  element.style.cursor = 'pointer';
  element.value = !element.value;
  console.log(element.value);
}

const fields = document.querySelectorAll('#field');

const field = (Switcher) => {
  const switcher = Object.create(Switcher);
  const props = {
    checked: false
  };

  return {
    log() {
      console.log(props.checked);
    },
    draw() {
      props.checked = switcher.change(props.checked)
    }
  }
}

const field1 = field(switcher)

field1.log()
field1.draw()
field1.log()
field1.log()
field1.draw()
field1.log()


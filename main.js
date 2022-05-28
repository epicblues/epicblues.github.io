const shuffle = (target = []) => {
  let buffer = [];
  let table = [];
  let secondaryTable = [];
  let checkedCount = 0;
  for (i = 0; i < target.length; i++) {
    table.push(false);
    secondaryTable.push(Number.MAX_SAFE_INTEGER);
  }

  while (buffer.length < target.length) {
    const nextIndex = Math.floor(Math.random() * target.length);
    if (nextIndex === checkedCount && target.length - buffer.length === 1) {
      buffer = [];
      table = [];
      secondaryTable = [];
      checkedCount = 0;
      for (i = 0; i < target.length; i++) {
        table.push(false);
        secondaryTable.push(Number.MAX_SAFE_INTEGER);
      }
      continue;
    }
    if (nextIndex === checkedCount) continue;
    if (secondaryTable[checkedCount] === nextIndex) continue;
    if (table[nextIndex]) continue;
    secondaryTable[nextIndex] = checkedCount;
    checkedCount++;
    table[nextIndex] = true;
    buffer.push(target[nextIndex]);
  }

  return buffer;
};

class Component {
  constructor(name) {
    this.name = name;
  }

  toElement() {
    const element = document.createElement("div");
    element.innerText = this.name;
    return element;
  }
}

const names = "민성,현정,한빈,훈기,민재".split(",");

const body = document.querySelector("#main");
const targetNode = document.querySelector("#target");
const arrowNode = document.querySelector("#arrows");

const components = names
  .map((name) => new Component(name).toElement())
  .forEach((node) => body.appendChild(node));

const button = document.querySelector("#shuffle");
button.addEventListener("click", () => {
  if (arrowNode.children.length === 0) {
    for (let i = 0; i < names.length; i++) {
      const arrow = document.createElement("div");
      arrow.innerHTML = "====>";
      arrowNode.appendChild(arrow);
    }
  }

  targetNode.innerHTML = "";
  const shuffledElements = shuffle(names);
  const shuffledComponents = shuffledElements
    .map((name) => new Component(name).toElement())
    .forEach((node) => targetNode.appendChild(node));
});

const field = document.getElementById('field');

// 1. Верхний левый внешний угол
const topLeftOuter = {
  x: field.getBoundingClientRect().left,
  y: field.getBoundingClientRect().top
};

// 2. Нижний правый внешний угол
const bottomRightOuter = {
  x: field.getBoundingClientRect().right,
  y: field.getBoundingClientRect().bottom
};

// 3. Верхний левый внутренний угол
const topLeftInner = {
  x: field.getBoundingClientRect().left + field.clientLeft,
  y: field.getBoundingClientRect().top + field.clientTop
};

// 4. Нижний правый внутренний угол
const bottomRightInner = {
  x: field.getBoundingClientRect().left + field.clientLeft + field.clientWidth,
  y: field.getBoundingClientRect().top + field.clientTop + field.clientHeight
};
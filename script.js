const slide = document.getElementById('slide');
const upArrow = document.getElementById('upArrow');
const downArrow = document.getElementById('downArrow');

let x = 0;

const moveUp = function () {
  if (x > '-46') {
    x -= 23;
    slide.style.top = x + 'em';
  }
};

const moveDown = function () {
  if (x < 0) {
    x += 23;
    slide.style.top = x + 'em';
  }
};

upArrow.addEventListener('click', moveUp);
downArrow.addEventListener('click', moveDown);

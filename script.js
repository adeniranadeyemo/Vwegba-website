const woodenCon = document.getElementById('wooden');
const slide = document.getElementById('slide');
const upArrow = document.getElementById('upArrow');
const downArrow = document.getElementById('downArrow');

const fontSizePixels = parseFloat(window.getComputedStyle(slide).fontSize);

const woodenHeightInPixels = woodenCon.offsetHeight;
const woodenHeightInEm = woodenHeightInPixels / fontSizePixels;

const slideHeightInPixels = slide.offsetHeight;
const slideHeightInEm = slideHeightInPixels / fontSizePixels;

const neededHeight = slideHeightInEm - woodenHeightInEm;

let x = 0;

const moveSlideUp = function () {
  if (x > `-${neededHeight}`) {
    x -= woodenHeightInEm;
    slide.style.top = x + 'em';
  }
};

const moveSlideDown = function () {
  if (x < 0) {
    x += woodenHeightInEm;
    slide.style.top = x + 'em';
  }
};

upArrow.addEventListener('click', moveSlideDown);
downArrow.addEventListener('click', moveSlideUp);

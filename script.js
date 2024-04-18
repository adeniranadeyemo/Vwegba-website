const scrollLinks = document.querySelectorAll('.scroll-link');

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

// Scrolling to section
scrollLinks.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Navigate/scroll to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - 75;

    if (id === 'contact') {
      position = position + 80;
    }

    window.scrollTo(0, position);
  });
});

// Scrolling showroom
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

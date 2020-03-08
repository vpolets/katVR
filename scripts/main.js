'use strict';

const techSpecs = document.querySelector('.kat-tech');
const techSpecsContainers = document.querySelectorAll('.kat-tech__spec');
const techSpecsLines = document.querySelectorAll('.kat-tech__line');

const [a1, a2, a3] = [
  document.getElementById('a1'),
  document.getElementById('a2'),
  document.getElementById('a3'),
];

const intersectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        [...techSpecsContainers, ...techSpecsLines].forEach(
          container => container.classList.toggle('is-active')
        );
        a1.beginElement();
        a2.beginElement();
        a3.beginElement();
        observer.unobserve(techSpecs);
      }
    });
  }, {
    threshold: 0.8,
  });

intersectionObserver.observe(techSpecs);

function loadImage() {
  const img = new Image();
  const x = document.getElementById('cover-img');

  img.onload = function() {
    x.src = img.src;
    x.classList.toggle('is-active');
  };

  img.src = './images/katVR_lg.png' + '?_=' + (+new Date());
}

loadImage();

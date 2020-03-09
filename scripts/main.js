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

const infoButtons = document.querySelectorAll('.kat-tech__button');
const toggleActive = (e) => {
  const { target } = e;

  if (target.classList.contains('is-active')) {
    target.classList.remove('is-active');
  } else {
    infoButtons.forEach(button => {
      button.classList.remove('is-active');
    });
    target.classList.add('is-active');
  }
};

infoButtons.forEach(button => {
  button.addEventListener('click', toggleActive, false);
});

document.addEventListener('click', (e) => {
  const { target } = e;

  if (!target.classList.contains('kat-tech__button')) {
    infoButtons.forEach(button => {
      button.classList.remove('is-active');
    });
  }
});

// burger button
const burger = document.querySelector('.header__burger-button');

burger.addEventListener('click', () => {
  burger.classList.toggle('is-active');
});

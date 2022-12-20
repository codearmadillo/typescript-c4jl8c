// Import stylesheets
import { data, frameworks } from './data';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

// Output
const render = (target: HTMLElement) => {
  // Parser
  const domParser = new DOMParser();
  data.forEach((set) => {
    const el = document.createElement('article');
    el.classList.add('rating');

    // HEAD
    const head = document.createElement('h2');
    head.classList.add('rating-title');
    head.textContent = set.q;
    el.append(head);

    // NOTE
    if (set.note) {
      const note = document.createElement('h4');
      note.classList.add('rating-note');
      note.textContent = set.note;
      el.append(note);
    }

    // FRAMEWORKS
    frameworks.forEach((framework, i) => {
      const value = set.a[i];

      const fTitle = document.createElement('span');
      fTitle.classList.add('framework-title');
      fTitle.textContent = framework;

      const fRating = document.createElement('span');
      fRating.classList.add('framework-rating');

      for (let j = 0; j < 5; j++) {
        const star = document.createElement('star');
        star.classList.add('star');

        if (j + 1 <= value) {
          star.classList.add('highlight');
        }

        star.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>`;

        fRating.append(star);
      }

      el.append(fTitle, fRating);
    });

    // APPEND
    target.append(el);
  });
};
render(appDiv);

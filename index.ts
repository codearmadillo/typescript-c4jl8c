// Import stylesheets
import { data, frameworks } from './data';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

// Output
const render = (target: HTMLElement) => {
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
      fRating.textContent = value.toString();

      el.append(fTitle, fRating);
    });

    // APPEND
    target.append(el);
  });
};
render(appDiv);

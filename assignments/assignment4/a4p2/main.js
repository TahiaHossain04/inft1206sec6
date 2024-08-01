/*
Name: Tahia Hossain.
File: main.js
Date: 30th July 2024
Raw JavaScrpt text with modifications and changes according to instructions.
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageList = ['pic1-.jpg', `pic2-.jpg`, `pic3-.jpg`, `pic4-.jpg`, `pic5-.jpg`];

/* Declaring the alternative text for each image file */

const alternateTextList = [
    'Closer look at the human eye',
    'Wave-like Rock',
    'Purple and White flowers',
    'Wall with Pharoah painting',
    'Butterfly on a leaf']

/* Looping through images */

for (const image of imageList) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alternateTextList[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
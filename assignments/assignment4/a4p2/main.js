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

const imageList = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

const alternateTextList = [
    'Closer look at the human eye',
    'Wave-like Rock',
    'Purple and White flowers',
    'Wall with Pharoah painting',
    'Butterfly on a leaf']

/* Declaring the alternative text for each image file */

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

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
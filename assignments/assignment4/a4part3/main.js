/*
Name: Tahia Hossain.
File: main.js
Date: 1st August 2024
Raw JavaScrpt text with modifications and changes according to instructions.
THIS IS THE ACTUAL PART 3 OF THE ASSIGNMENT 4. THE ONE NAMED a4p3 AND COMMITTED
AS SUCH IS ACTUALLY PART 4 OF THE ASSIGNMENT. I DID NOT CHANGE THE NAME IN CASE
IT MESSED UP MY COMMITS.
*/

// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
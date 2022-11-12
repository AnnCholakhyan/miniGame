"use strict";

const board = document.querySelector('#board');
const colors = ['#b394e5','#3bb1b7','#17ba6e','#f74ef7','#28e610','#852cf9','#e6137d'];
const SQUARES_NUMBER = 700;

for (let i = 0; i<SQUARES_NUMBER; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => 
        setColor(square));
    square.addEventListener('mouseleave', () => 
    removeColor(square));
    board.append(square);
}

function setColor(element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(){
   return colors[Math.floor(Math.random() * colors.length)];
}
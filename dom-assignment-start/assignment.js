const firstTaskElementById = document.getElementById('task-1');
const firstTaskElementByQuery = document.querySelector('li');
const title = document.querySelector('title');
const titleByProp = document.title;
const h1 = document.querySelector('h1');


firstTaskElementById.style.color = 'white';
firstTaskElementByQuery.style.backgroundColor = 'black';
title.textContent = "Assignment - Solved!";
h1.textContent = "Assignment - Solved!";

console.log(titleByProp);
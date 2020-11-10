const h1 = document.getElementById('main-title');
const li = document.querySelector('li:last-of-type');
const listItemElements = document.querySelectorAll('li');
const body = document.body;
const ul = document.querySelector('ul');
const textNode = ul.childNodes[0];


h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';




li.textContent += '(changed)';

console.dir(textNode);



for (const li of listItemElements) {
    console.log(li);
}
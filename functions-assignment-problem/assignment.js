const sayHello = name => console.log('Hi ' + name);

const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);

const sayHello3 = () => console.log('Hi hard- coded!');

const sayHello4 = name => 'Hi ' + name;

sayHello('Max');
sayHello2('Max', 'Hi');
sayHello3();
console.log(sayHello4('Max'));

const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

sayHello5('Maxx');
sayHello5('Maxx', 'Hello');


const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const str of strings) {
    if (!str) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
};

checkInput(() => {
  console.log('All not empty');
},
  'Hello',
  '120',
  'asda',
  'sdsd'
);
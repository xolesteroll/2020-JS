// const ids = new Set([1, 2, 2, 3]);
// ids.add(2);
// ids.delete(3);
// for (const entry of ids.values()) {
//     console.log(entry);
// }

// // console.log(ids);

// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};

// const personalData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

// personalData.set(person2, [{date : 'two weeks ago', price: 100}]);

// console.log(personalData);
// console.log(personalData.get(person1));

// for (const [key, value] of personalData.entries()) {
//     console.log(key, value);
// }

// for (const key of personalData.keys()) {
//     console.log(key);
// }

// for (const value of personalData.values()) {
//     console.log(value);
// }
// console.log(personalData.size);

let person = {name : 'Max'};

const persons = new WeakSet();

persons.add(person);

console.log(persons);
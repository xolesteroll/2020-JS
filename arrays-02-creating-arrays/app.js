// // const numbers = [1, 2, 3];

// // const moreNumbers = new Array('Hi', 'Welcome'); // = []

// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);

// // console.log(yetMoreNumbers);

// // const listItems = document.querySelectorAll('li');
// // const arrFromNodeList = Array.from(listItems);
// // console.log(listItems);
// // console.log(arrFromNodeList);

// // const hobbies = ['cooking', 'sports'];
// // const personalData = [30, 'Max', {moreDetail: []}];

// // const analityctsData = [[1, 1.5], [-5.4, 2.1]]; // Nested Array

// // for (const data of analityctsData) {
// //     for (const dataPoint of data) {
// //         console.log(dataPoint)
// //     }
// // }

// // const hobbies = ['Sports', 'Cooking'];
// // hobbies.push('Reading');
// // hobbies.unshift('Coding');
// // const removedString = hobbies.pop();
// // const shiftedItem = hobbies.shift();
// // hobbies.splice(0, 0, 'Good Sex');
// // const removedElements = hobbies.splice(-2, 1);
// // console.log(removedString);
// // console.log(shiftedItem);
// // console.log(hobbies);
// // console.log(removedElements);

// // const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // const storedResults = testResults.concat();

// // console.log(testResults.slice());
// // console.log(testResults.indexOf(1.5));

// // const personData = [{name: 'Max'}, {name: 'Manuel'}];
// // console.log(personData.indexOf({name: 'Manuel'}))

// // const manuel = personData.find((person, index, persons) => {
// //     return person.name === 'Manuel';
// // });
// // console.log(manuel);

// // const prices = [10.99, 5.99, 3.99, 6.59];
// // const tax = 0.19;
// // const taxAdjustedPrices = [];

// // // for (const price of prices) {
// // //     taxAdjustedPrices.push(price + (price * tax));
// // // }

// // prices.forEach((price, index, prices) => {
// //     const priceObj = {idx: index, taxAdjPrice: price + (price * tax)};
// //     taxAdjustedPrices.push(priceObj);
// // });

// // console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// // const tax = 0.19;

// // const adjustedPrices = prices.map((price, index, prices) => {
// //     const priceObj = {idx: index, taxAdjPrice: price + (price * tax)};
// //     return priceObj;
// // });

// // // console.log(adjustedPrices);
// // const days = [5, 7, 23, 2, 13]
// // const sortedDays = days.sort((a, b) => {
// //     if (a > b) {
// //         return 1;
// //     } else if (a === b) {
// //         return 0;
// //     } else {
// //         return -1;
// //     }
// // });
// // const sortedPrices = prices.sort((a, b) => {
// //     if (a > b) {
// //         return 1;
// //     } else if (a === b) {
// //         return 0;
// //     } else {
// //         return -1;
// //     }
// // });
// // console.log(sortedPrices);
// // console.log(sortedDays);

// // const filteredPrices = prices.filter(price => price > 6);

// // console.log(filteredPrices);

// // // let sum = 0;

// // // prices.forEach((price) => {
// // //     sum += price;
// // // });

// // // console.log(sum);

// // // const sum = prices.reduce((prevValue, curentValue) => prevValue + curentValue, 0);

// // // console.log(sum);

// // const arr = [{price: 11}, {price: 6}, {price: 30}];
// // const sum = arr.reduce((sumVal, curVal) => sumVal + curVal.price, 0);
// // console.log(sum);

// const data = 'new york;10.99;200';
// const transformedData = data.split(';', 2);
// // console.log(transformedData);

// const nameFragements = ['Max', 'Schwarz'];
// const name = nameFragements.join(' ');
// // console.log(typeof(name));

// const copiedNameFragments = [...nameFragements];
// console.log(copiedNameFragments);

// const persons = [{name: 'Max', age: 30}, {name: 'Manuel', age: 31}];
// const copiedPersons = [...persons];

// persons.push({name: 'Anna', age: 29});
// persons[0].age = 31;

// console.log(persons, copiedPersons);

const nameData = ['Max', 'Schwarz'];

// const firstName = nameData[0];
// const lastName = nameData[1];

const [ ] = nameData;
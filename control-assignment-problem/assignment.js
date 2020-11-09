const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const secondRandom = Math.random();

if ((randomNumber > 0.7 && secondRandom > 0.7) ||
    randomNumber <= 0.2 ||
    secondRandom <= 0.2) {
    alert(randomNumber, secondRandom);

}

console.log(randomNumber, secondRandom);

const arr = [1, 2, 3, 3, 5, 6, 7];

for (let i of arr) {
    console.log(i);
}

for (let i = 1; i <= arr.length; i++) {
    console.log(arr[arr.length - i]);
}
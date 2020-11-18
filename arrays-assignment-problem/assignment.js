const numArray = [1.5, -6, 7, 28, 28, 32, 7.7, 32];

const filteredArray = numArray.filter(num => num > 5);

const mappedArray = numArray.map((num) => {
  const numObject = { number: num };
  return numObject;
});

const shortMappedArray = numArray.map(num => ({number: num}));

const reducedArray = numArray.reduce((prevValue, currentValue) => {
  // console.log(prevValue);
  // console.log(currentValue);
  return prevValue * currentValue;
}, 1);

const shortReducedArray = numArray.reduce((prevValue, currentValue) => prevValue * currentValue, 1);


const findMax = (someNumbers) => { // my version
  const maxNum = Math.max(...someNumbers);
  const minNum = Math.min(...someNumbers);
  return [maxNum, minNum];
};

const findMaxByMax = (...nums) => {
    let curMax = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
    }
    return curMax;
};

const findMinMaxByMax = (...nums) => {
    let curMax = nums[0];
    let curMin = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
        if (num < curMin) {
            curMin = num;
        }
    }
    return [curMax, curMin];
};

const [maxNum, minNum] = findMinMaxByMax(...numArray);
console.log(maxNum);
console.log(minNum);
console.log(shortMappedArray);
console.log(findMaxByMax(...numArray));
console.log(findMinMaxByMax(...numArray));

const newSet = new Set(numArray);

console.log(newSet);

// console.log(filteredArray);
// console.log(mappedArray);
// console.log(reducedArray);

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Returns input from input field
function getUserNumberInput() {
    return +userInput.value;
}
//Refreshes the input and focuses it
function refreshAndFocusInput(input) {
    input.value = null;
    input.focus();
}
//Creates an operation log and displays it on a page
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescr = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescr);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        beforeResult: prevResult,
        number: operationNumber,
        total: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calcType) {
    const enteredNumber = getUserNumberInput();
    if (calcType !== 'ADD' && calcType !== 'SUBTRACT' && calcType !== 'MULTIPLY' && calcType !== 'DIVIDE' || !enteredNumber) {
        return;
    }
    const initialResult = currentResult;
    let mathOperator;
    if (calcType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calcType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calcType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calcType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    createAndWriteLog(mathOperator, initialResult, enteredNumber);
    writeToLog(calcType, initialResult, enteredNumber, currentResult);
    refreshAndFocusInput(userInput);
}



function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multyply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multyply);
divideBtn.addEventListener('click', divide);



//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
let newString = 'stringofletters' ;

//create a number variable, it an be any number
let newNum = 6 ;

//create a boolean variable
let newBool = true ;

//solve the following math problem
let newSubtract = 10 - 5 === 5;

//Solve the following math problem
let newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
let newModulo = 21 % 5 === 1 ;

//In the next 22 problems you will compete the function. All of your code will go inside of the function braces.
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work.
//Do not change any of the function names

function returnString(str) {
  return str;
}

function add(x, y) {
  let sum = x + y;
  return sum;
}

function subtract(x, y) {
  var subtracted = x - y;
  return subtracted;
}

function multiply(x, y) {
  let multiplied = x * y;
  return multiplied;
}

function divide(x, y) {
  let divided = x/y;
  return divided;
}

function areEqual(x, y) {
  if (x === y){
    return true;
  }

    return false;
  }



  function areSameLength(str1, str2) {
      if (str1.length===str2.length){
        return true;
      }
        return false;
    }

  // return true if the two strings have the same length
  // otherwise return false
  // code here


  function lessThanNinety(num){
  if (num < 90){
    return true;
    }
    return false;
  }


  // return true if the function argument: num , is less than ninety
  // otherwise return false
  // code here


function greaterThanFifty(num) {
if (num > 50){
  return true;
  }
  return false;
  }

function getRemainder(x, y) {
  return (x % y);
}

function isEven(num) {
  if (num%2 === 0){
    return true;
  }
  return false;
}

// return true if num is even
// otherwise return false
// code here

function isOdd(num) {
  if (num%2 === 0){
    return false;
  }
  return true;
}

function square(num) {
  var squared = (num * num);
  return squared;
}

function cube(num) {
var cubed = (num * num * num);
return cubed;
}

function raiseToPower(num, exponent) {
  var raised = Math.pow(num, exponent);
  return raised;
}

function roundNumber(num){
  var rounded = Math.round(num);
  return rounded;
}



function roundUp(num) {
  var rounded2 = Math.ceil(num);
  return rounded2;
}

function addExclamationPoint(str) {
var addEP = (str) + '!';
return addEP;
}

function combineNames(firstName, lastName) {
  var combined = firstName + ' ' + lastName;
  return combined;
}

function getGreeting(name) {
  var newname = 'Hello ' + name + '!';
  return newname;
}
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here


// The next three questions will have you implement math area formulas.
// If you can't remember these area formulas then head over to Google.

function getRectangleArea(length, width) {
  var area = (length * width);
  return area;
  }
  // return the area of the rectangle by using length and width
  // code here


function getTriangleArea(base, height) {
  let triarea = (base * (.5 * height));
  return triarea;
    }



// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString: newString,
  newNum: newNum,
  newBool: newBool,
  newSubtract: newSubtract,
  newMultiply: newMultiply,
  newModulo: newModulo,
  returnString: returnString,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea
};

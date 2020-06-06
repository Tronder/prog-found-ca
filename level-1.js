// question 1

var fruit = "apple";

// question 2

var person = {
  name: "carl",
  age: 25,
};

// question 3

var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// question 4

var numberArray = [10, 21, 32, 43, 54];

for (var i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}

// question 5

for (var count = 15; count < 26; count++) {
  console.log(count);
}

// question 6

for (var count = 15; count < 26; count++) {
  if (count === 20) {
    console.log(count);
  }
}

// question 7

var dishes = [
  {
    name: "pasta carbonara",
    price: 120,
    inStock: true,
  },
  {
    name: "Fish soup",
    price: 110,
    inStock: false,
  },
];

// question 8

function whatIDontLike(spiders) {
  console.log("I don't like " + spiders);
}

whatIDontLike("red wine");

// question 9

function subtractionFunction(number1, number2) {
  var total = number1 - number2;
  console.log(total);
}

subtractionFunction(125, 25);

// question 10

var thisArray = [];

function addToArray(addValue) {
  thisArray.push(addValue);
}

addToArray("this will be added to the array");

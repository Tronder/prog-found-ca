// question 1

for (var count = 15; count < 26; count++) {
  if (count % 2 === 0) {
    console.log(count);
  }
}

// question 2

function talkToMe() {
  console.log("I am a function");
}

var innerFunction = talkToMe;

function outerFunction(theArgument) {
  theArgument();
}

outerFunction(innerFunction);

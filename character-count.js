// var input = "light house in the house"

function countLetters(input) {

  var newInput = input.toLowerCase().split(" ").join("");
  var result = {};

  for (var i = 0 ; i <newInput.length; i++) {
    var letter = newInput[i];

    if(result[letter] === undefined) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  }
return result
}

console.log(countLetters(process.argv.slice(2)[0]));//.join(" ")));
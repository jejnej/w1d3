var input = "The quick brown fox jumps over the lazy dog";
function countWords(input) {
// Lowercase the input

var lowerInput = input.toLowerCase();

//split the input on " " to get individual words
var splitInput = lowerInput.split(" ");
// loop through the input and count each word
var result ={};

for (var i = 0; i < splitInput.length; i++) {
  var word = splitInput[i];
  if(result[word] === undefined) {
    result[word] = 1;
  } else {
    result[word] += 1;
  }

}
return result
}

console.log(countWords(input));
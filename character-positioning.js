function countIndices(input) {

  var newInput = input.toLowerCase().split(" ").join("");
  var result = {};

  for (var i = 0; i < newInput.length; i++) {
  var indice = newInput[i];

     if(result[indice] === undefined) {
      result[indice] = [i];
    } else {
      result[indice].push(i);
    }
  }
return result;
}





  console.log(countIndices(process.argv.slice(2)[0]));//.join(" ")));
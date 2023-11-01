/*Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/

//ejemplo
let arr = ["This", "is", "a", "sentence."];

function printOutString() {
  let frase = arr.join(" ");
  console.log(frase); 
}

printOutString();

let arr = ["Esto", "es", "una", "frase."];

function printOutString() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "frase.") {
      break;
    } else {
      console.log(arr.join (" "));
    }
  }
}

printOutString();

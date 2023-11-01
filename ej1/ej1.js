//Exercise #1 (sugerencia: join())
//Copy the code below into your workspace:
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



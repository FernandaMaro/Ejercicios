/*Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/

function resultado(array){
    const doble = [];
    for (let i = 0; i <array.length; i++){
        doble.push(array[i] *2) 
        }
        console.log(doble);
    }
const base =[1, 2, 4, 5]
resultado(base);
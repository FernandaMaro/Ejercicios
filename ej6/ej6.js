Exercise # 6
Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]

function compara( a, b){
    return a - b;
}

const input = [3, 6, 12, 5, 100, 1];
console.log(input.sort( compara ));
//↑ese es el que se me ocurrio ocupar pero investigando tambien puede ser este
function bubbleSort(items) {
    let length = items.length;
    for (let i = 0; i < length; i++) {
      for ( let i = 0; i < (length - i - 1); i++) {
        if (items[i] > items[i + 1]) {
          let a = items[i];
          items[i] = items[i + 1];
          items[i + 1] = a;
        }
      }
    }
  }
  
  let array = [3, 6, 12, 5, 100, 1];
  bubbleSort(array);
  console.log(array);
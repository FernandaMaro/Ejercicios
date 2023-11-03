Exercise # 6
Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]

function compara( a, b){
    return a - b;
}

const input = [3, 6, 12, 5, 100, 1];
//aseguramos que sea el output correcto:0
console.log(input.sort( compara ));
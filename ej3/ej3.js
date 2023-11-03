Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

const numeros = [1, 2, 3, 4];
function resultado(numeros) {
    let suma = 0;
    let product = 1;
  
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
      product *= numeros[i];
    }
  
    console.log(`La suma es ${suma}.`);
    console.log(`La multiplicacion (producto) es ${product}.`);
  }
  resultado(numeros);
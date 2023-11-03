/*Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.*/

let personas = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(personas)
console.log(personas.splice(1,1));
console.log(personas );
console.log(personas.splice(2,1))
console.log(personas)
personas[0] = "Luis";
personas[1]="Maria";
console.log(personas);
console.log (personas.push("Fernanda"))
console.log(personas)
const mariaIndex = personas.indexOf("Maria");
for (let i = 0; i < personas.length; i++) {
  console.log(personas[i]);
  if (personas[i] === "Maria") {
    break;
  }
}
  console.log("El index de Maria es: " + mariaIndex);


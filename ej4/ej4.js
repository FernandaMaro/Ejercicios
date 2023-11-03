/*Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
const clasesEnComun = student1Courses.filter(clases => student2Courses.includes(clases));

if (clasesEnComun.length > 0) {
  console.log('Clases en comun:');
  clasesEnComun.forEach(clases => {
    console.log(clases);
  });
} else {
  console.log('Sin clases en comunes');
}

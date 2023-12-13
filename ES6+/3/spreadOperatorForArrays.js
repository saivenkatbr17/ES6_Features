// spread operator unwraps the values of a iteratable variables or objects
let example1 = [1,2,3,4,5];
let example2 = [...example1];
example2.push(true);
console.log(example1);
console.log(example2);
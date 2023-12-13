import { Animal } from "./animals.js";

let cat = new Animal('Cat',4);
console.log(cat);
cat.makeNoise('Meow Meow');
console.log(Animal.getInReturn());
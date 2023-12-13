let word1 = 'John';
let word2 = 'Snow';
let num1 = 2;
let num2 = 3;

//without template literals
let fullName = word1+' '+word2;
let sum = num1+num2;
console.log(fullName);
console.log(sum);

//Template Literals
let fullName1 = `${word1} ${word2}`;
let sum1 = `${num1 + num2}`;
console.log(fullName1);
console.log(sum1);


//This is without template literals
let example = "hello \n"+"world";
console.log(example);
//document.getElementById('example').innerText = example;



//This is what we can do with Template Literals
let example1 = `${'hello'}
${'world '}
${'1234'}
`;
//document.getElementById('example').innerText = example1;
console.log(example1);
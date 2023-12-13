// let us consider var

// if (false){
//     var example = 5;
// }
// console.log(example);

// the above code is equivalent to :
// var example;
// if (false){
//     example = 5;
// }

//but thats not the case while using let

if (false){
    let example = 5;
}
console.log(example);

// it returns an error
function add(nums){
    console.log(nums);
}

add(5,6,7,8,9,2,3,4);

// we can see that we want the function to print the complete array
//but it can only print the firt element of the array
// soo we use rest operator which is similar to spread operator

function add1(...nums){
    console.log(nums);
}

add1(1,2,3,4,5,6,7,8,9);

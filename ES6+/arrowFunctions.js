function sum(...nums){
    let total = nums.reduce((x,y) => x+y);
    console.log(total);
}

sum(12,8,4,9,3);
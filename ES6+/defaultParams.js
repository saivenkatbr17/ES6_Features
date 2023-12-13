// default params are the default values that are used in the function when atrributes are not given

function add(nums = [12,8,4,9,3]){
    let total = 0;
    nums.forEach(element => {
        total += element;
    });
    console.log(total);
}

add()
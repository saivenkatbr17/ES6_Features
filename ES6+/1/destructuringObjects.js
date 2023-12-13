let personalInformation = {
    firstName: 'John',
    lastName: 'Snow',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: 500072
}

let {firstName: fn,lastName: ln} = personalInformation;
console.log(`${fn} ${ln}`);
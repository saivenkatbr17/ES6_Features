function addressMaker(city, state){
    const newAddress = {newCity: city,newState: state};
    console.log(newAddress);
}

addressMaker('Hyd','Telangana');

//when we use city insted of newCity in the function we dont have to write
// {city: city, state: state}
// instead we can simply write 

function addressMaker1(city, state){
    const address = {city,state};
    console.log(address);
}

addressMaker1('Chnnai','Tamil Nadu');

//by using this we assign 'Chennai' and 'Tamil Nadu' to city and state insted of newCity and newState 



//challenge is to use template literals, destructuring and object literals in the below example

function addressMaker(address){
    const {city,state}=address; //Destructuring
    const newAddress = {city,state,country: 'India'}; //Objest Literals
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`) //Temlate literals
}

addressMaker({city:'Hyd', state:'Telangana'})
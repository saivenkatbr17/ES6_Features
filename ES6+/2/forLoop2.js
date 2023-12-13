let incomes = [100000, 200000, 300000, 400000];
 for(let income of incomes){
    income += 50000;
 }

 console.log(incomes)

 // from this we can see that we cant use for of loop to set up new values
 // for of loop can only be used to iterat objects
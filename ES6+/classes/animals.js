export class Animal {
    constructor(type, legs){
        this.type = type;
        this.legs = legs;
    }
    makeNoise(sound = 'Meow'){
        console.log(sound)
    }
    static getInReturn(){
        console.log('Cat is a pet animal');
    }
    
}
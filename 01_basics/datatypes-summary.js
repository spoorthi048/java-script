// Primitive

// 7 Types : String , Number, Boolean, null, undefined,Symbol, BigInt

const score=100
const scorevValue= 100.3

const isLoggedIn= false
const outsideTemp = null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123') //it may contain same value but when you compare both it is not equal
console.log(id==anotherId);


const bigNumber =34683263878n //if you add n it will become bigInt

//Reference (Non-prmitive)

// Arrays.Objects, Functions

const heros=["Shakthiman","doga","nagraj"];

let myObj={
    name : "spoorthi",
    age :16
}


const myFuntion=function(){
    console.log("Hello world");
    
}

console.log(typeof anotherId);

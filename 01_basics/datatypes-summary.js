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



// Stack (primitive), Heap (Non-primitive)
// stack=when we take something from stack we only get the copy of that
//Heap=when we take somethinng from heap we get reference that means whatever we change it will be changed in original value also

let myYoutube="Spoorthi@googgle.com"
let anotherName=myYoutube
anotherName="Yashu@google.com"
console.log(anotherName);
console.log(myYoutube);


let userOne={
    email:"user@google.com",
    UPI:"user@bl"
}

let userTwo=userOne
userTwo.email="spoorthi@google.com"

console.log(userOne.email);
console.log(userTwo.email);


 

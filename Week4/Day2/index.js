// Exercise 1 / Part 1
let aboutMe = {
    myName:"Leo",
    myLastname:"Brodskyi",
    myAge:"30",
    hobbie:"walks in nature"
}
function infoAboutMe() {
  console.log(aboutMe)
}
infoAboutMe()

// Exercise 1 / Part 2
function infoAboutPerson(personName, personAge, personFavoriteColor)
{console.log("You name is " + personName + ", you are " + personAge + " years old, your favorite color is " + personFavoriteColor)
};
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// Exercise 2
function calculateTip(){
let bill = prompt("what's summ of your bill?");
let tip=0;
if (bill<=50){tip=bill*0.2}
else if (bill>50 & bill<200){tip=bill*0.15}
else {tip=bill*0.1}
let inGlobal = parseInt(bill) + parseInt(tip)
console.log("Bill = " + bill + ", tip = " + tip + ", Total Bill Amount = " + inGlobal)
}
calculateTip()

// Exercise 3
let array = []
function isDivisible(divisor){
    for(i=divisor; i<=500; i++)
    if(i % divisor === 0)
    {array.push(i)}
    return i}
isDivisible(23)
console.log(array)
console.log(array.reduce((a, b) => a + b, 0))



// Exercise 4
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  
let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange","apple"]

function myBill(){

}


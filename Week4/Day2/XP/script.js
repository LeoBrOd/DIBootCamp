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
{console.log(` Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)};
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
console.log(`Bill = ${bill},tip = ${tip}, Total Bill Amount = ${inGlobal}`)
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
    let sum = []
for (let i = 0; i < shoppingList.length; i++) {
       if (shoppingList[i] in stock) {
            if (stock[shoppingList[i]]>0){
                sum.push(prices[shoppingList[i]])
                stock[shoppingList[i]]=stock[shoppingList[i]]-1
            };
        }
    }
    console.log(sum.reduce((a, b) => a + b, 0));
    console.log(stock);
}
myBill()


// Exercise 5
let change = [0.25, 0.10, 0.05, 0.01]
function changeEnough(itemPrice, amountOfChange) {
    for (let i = 0; i < change.length; i++) {
        amountOfChange[i]=amountOfChange[i]*change[i]
    }
    itemPrice < amountOfChange.reduce((a, b) => a + b, 0)
    ?  console.log("True")
    :  console.log("False")
}
changeEnough(14.11, [2,100,0,0])
changeEnough(0.75, [0,0,20,5])

// Exercise 6
let night = 140
function hotelCost() {
    let req = parseInt(prompt("How many nights would you like to stay in the hotel? "))
    return !isNaN(req)
    ? `${req*night}$`
    : hotelCost()
}
function planeRideCost() {
    let req2 = prompt("Where do you wanna go? ").toLowerCase()
   if (/^[a-z]+$/i.test(req2)) {
      return (req2 == "london")
       ? "183$"
        : req2 == "paris"
        ? "220$"
       : "300$"
   } 
   else {
       planeRideCost()
   } 
}
let car = 40
function rentalCarCost() {
    let req3 = parseInt(prompt("How many days would you like to rent tthe car? "))
    return !isNaN(req3)
        ?(req3>10
            ? `${(0.95*req3*car).toFixed(2)}$`
            : req3<=10
            ? `${req3*car}$`
            : rentalCarCost())
        :rentalCarCost()
}
function totalVacationCost() {
   console.log( `The car cost: ${hotelCost()}'\n' 
                The hotel cost: ${planeRideCost()}'\n'
                The plane tickets cost: ${rentalCarCost()} `)
}

totalVacationCost()
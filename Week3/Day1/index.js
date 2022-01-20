// Exercise 1
let addressNumber = "5";
let addressStreet = "BenYehuda";
let country = "Israel";
let globalAddress = "I live in " + addressStreet.concat(addressNumber, ", in ", country);
console.log(globalAddress);

// Exercise 2
let birthYear = 1991;
let futureYear = 2022;
let myAge = futureYear-birthYear
let info = "I will be " + myAge + " in " + futureYear;
console.log(myAge);

// Exercise 3
let pets = ["cat", "dog", "fish", "rabbit", "cow"];
let dog = pets[1];
pets.push("horse");
pets.splice(3,1);
let lenght = pets.length;
console.log(dog);
console.log(pets);
console.log(lenght)
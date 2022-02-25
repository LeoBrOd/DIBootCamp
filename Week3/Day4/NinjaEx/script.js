//Exercise 1
const dadBday = 1959
const sonBday = 1991
//step 1
//write a func to get year of dad at a given year
//the given year wiil be param of func
let dadAge = (year)=> dadBday-year
//step 2 
//write a func to get year of son at a given year
//the given year wiil be param of func
let sonAge = (year)=> sonBday-year
//step 3 
//find the smallest year for which i coulkd execute my code
//put it into curYear
let curYear = sonBday
//step 4 
//run a while loop until step 2 func return *2 === step 1 func
//++year during the while
// while (sonAge(curYear)*2!==(dadAge(curYear))){
//    curYear++
// }
for (curYear; (sonAge(curYear)*2!==(dadAge(curYear))); curYear++) {}
//step 5 log current year
console.log(curYear);


// let today = new Date.getFullYear()
// let dadAge = (year)=> -dadBday
// let sonAge = (year)=>-sonBday
// for (let i=0; i<=(sonAge==dadAge/2)>0 ;i++){
//    console.log(`It happened in ${i+1+sonBday}`);
// }


//Exercise 2
let zipCode = prompt("Put your zipcode please...")
if (zipCode.length!=5 || !zipCode.match(/^[0-9]+$/)) {
   alert("mistake");
}
else {
alert("success");
}

//Exercise 3
let secretWord = prompt("Please select a word...")
console.log(secretWord.replaceAll(/[aeiou]/g , ""));
let newSecretWord = secretWord.replace(/[aeiou]/g ,replacement => ({'a':1, 'e':2, 'i':3, 'o':4, 'u':5 })[replacement])
console.log(newSecretWord);

//Exercise 1
let dadBday = 1959
let sonBday = 1987
let today = new Date
let yearNow = today.getFullYear()
let dadAge = yearNow-dadBday
let sonAge = yearNow-sonBday
for (let i=0; i<=(sonAge=dadAge/2)>0 ;i++){
   console.log(`It happened in ${i+1+sonBday}`);
}

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

//Exercise 1 
let people = ["Greg", "Mary", "Devon", "James"]
people.shift(0)
people[2]="Jason"
people.push("Leo")
console.log(people.indexOf("Mary"));
let peopleNew = people.slice(1,1)
console.log(people.indexOf("Foo"));
let lastName = people[people.length-1]

people.forEach( function(i){ 
    console.log(i);
});
for (let i = 0; i <=people.indexOf("Jason"); i++) {
    console.log(people[i]); 
}

//Exercise 2
let colors = ["green", "white", "orange", "purple", "yellow"]
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i+1} choice is ${colors[i]}`);  
}
let suf = ["st", "nd", "rd", "th", "th"]
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i+1}${suf[i]} choice is ${colors[i]}`);  
}

//Exercise 3
let req = parseInt(prompt("Please choose a number..."))
if (typeof(req) === "number"){
 while (req<10){
     req = parseInt(prompt("Please choose a number..."))
 };
}
else{
    alert("Your input not a number!")
    
}

//Exercise 4
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log(`Number of floors in the building - ${building.numberOfFloors}`);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.secondFloor);
console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan[0]);
if (building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]>
    building.numberOfRoomsAndRent.dan[1]) { building.numberOfRoomsAndRent.dan[1] = 1200
}
console.log(building.numberOfRoomsAndRent.dan[1]);

//Exercise 5
let family = {
    dad: [1959, "painting"],
    mom: [1960, "music"],
    sun: [1991, "travelling"]
}

let keys = Object.keys(family)
for (let i = 0; i < keys.length; i++) {
    const element = keys[i];
    console.log(element);
}
let values = Object.values(family)
for (let i = 0; i < values.length; i++) {
    const element = values[i];
    console.log(element);
}

//Exercise 6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  let values = Object.values(details)
  for (let i = 0; i < values.length; i++) {
  console.log(`my ${values[0]} is ${values[1]} the ${values[2]}`);
  }

  // Exercise 7
  let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"].sort()
  let secretWord = names.map((firstLetter) =>firstLetter[0]).join("")
  console.log(secretWord);
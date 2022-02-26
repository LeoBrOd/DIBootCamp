//Exerciuse 1
let person1 = {
    FullName: "Sarah",
    Mass: 65,
    Height: 160,
    bmi: function(){
    return (this.Mass/(this.Height*this.Height/1000))
    }}
let person2 = {
    FullName: "John",
    Mass:70,
    Height:165,
    bmi: function(){
    return (this.Mass/(this.Height*this.Height/1000))
}}
if (person1.bmi()>person2.bmi()){
    console.log(person1.FullName)}
    else{console.log(person2.FullName)}

//Exerciuse 2

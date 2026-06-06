const person = {
    name : "Adi",
    age : 20, 
    isMarried : false
};

// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;

const {name, age, isMarried} = person
const person2 = {...person, name:"X"}
console.log(person2)
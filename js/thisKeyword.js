const person = {
    name : "Alice",
    greet() {
        console.log(`hello, my name is ${this.name}`)
    }
};

person.greet()
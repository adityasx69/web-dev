function greet(name,age=12){
    console.log(name)
}
greet("Aditya") 

const greet1 = function(name){
    console.log(name)
}
greet1("A")

const greet2 = (name) => {
    return () => name
}
console.log(greet2("B")())
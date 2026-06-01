const obj = {
    name : "Alice",
    age : 23,
    sayHello: function(){
        return "hello"
    },
    career: {}
}

obj.age = "tim"
obj.newProp = [1,2]

obj["name"] = "x"

console.log(Object.values(obj))
for(let key in obj){
    console.log(key)
}

const obj2 = {
    hairColor : "black",
    arr: [1,2,3]
}

const obj3 = {...obj, ...obj2}
console.log(obj3)
obj3.career.info = "tech"
console.log(obj,obj3)
const {hairColor,name} = obj3
console.log(hairColor,name)
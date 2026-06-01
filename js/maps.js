const myMap = new Map();
const numberMap = new Map([[1,'one'],[2,'two']]);

numberMap.set(4,"four")
numberMap.delete(4)
console.log(numberMap.get(1))
console.log(numberMap.has(1))
myMap.set(3,"three")

for(const [key,value] of numberMap){
    console.log(key,value)
}

for(const keys of numberMap.keys()){
    console.log(keys)
}

for(const values of numberMap.values()){
    console.log(values)
}

myMap.clear()
console.log(myMap)

const arr = Array.from(numberMap)
console.log(arr)
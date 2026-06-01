const mySet = new Set([1,2,3]);
mySet.add(1)
mySet.delete(1)
console.log(mySet.has(1))
console.log(mySet.size)
for(const value of mySet){
    console.log(value)
}
mySet.clear
console.log(mySet)
const mySet1 = new Set([1,2,3]);
const arr = Array.from(mySet1)
const arr1 = [...mySet]
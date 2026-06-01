const [x, y] = [1,2]

console.log(x, y)

const [a, ...b] = [1,2,3,4]

console.log(a,b)

const c = [1,2,3,4]

const d = [...c]
d.push("hello")
console.log(c,d)

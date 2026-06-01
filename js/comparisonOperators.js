// ==
// ===
// !=
// !==
// <
// >
// <=
// >=

// loose operator will change the type
console.log("Loose: ")
console.log("1" == 1)
console.log(true == 1)
console.log(true == undefined)
console.log(null == undefined)
console.log("" == 0)
console.log("" == [])
console.log("1,2" == [1,2])
console.log("1,2" != [1,2])
console.log("1" != 1)

// strict operator will not change the type
console.log("Strict: ")
console.log("1" === 1)
console.log(true === 1)
console.log(true === undefined)
console.log(null === undefined)
console.log("" === 0)
console.log("" === [])
console.log("1,2" === [1,2])
console.log("1,2" !== [1,2])
console.log("1" !== 1)
const myPromise = new Promise((resolve,reject) => {
    if(false){
        resolve("good");
    }else{
        reject("bad");
    }
});

myPromise.then((value) => {
    console.log(value)
}).catch((value) => {
    console.log(value)
}).finally(() => {
    console.log("always")
})

const promise1 = Promise.resolve(1)
const promise2 = new Promise((resolve,reject) => setTimeout(resolve,1000,"foo"))
const promise3 = new Promise((resolve,reject) => setTimeout(resolve,3000,"bar"))

Promise.all([promise1,promise2,promise3])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    })
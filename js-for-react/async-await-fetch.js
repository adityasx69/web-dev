// const event = new Promise((resolve,reject) => {
//     var name = "Pedro";
//     if(name == "Pedro"){
//         resolve(name);
//     }
//     else{
//         reject("Name was not Pedro, name was " + name);
//     }
// });

// event
//     .then((name) => {
//         console.log(name)
//     }).catch((err) => {
//         console.log(err)
//     }).finally(() => {
//         console.log("promise finished!")
//     })

// const axios = require("axios");

// const data = axios.get("https://cat-fact.herokuapp.com/sadas");
// data.then((res) => {
//     console.log(res.data)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log("promise resolved")
// })

const axios = require("axios");

const fetchData = async () => {
    try{
        const data = await axios.get("https://cat.herokuapp.com/facts");
        console.log(data)
    }catch(err){
        console.log(err)
    }finally{
        console.log("finished!")
    }
}

fetchData()
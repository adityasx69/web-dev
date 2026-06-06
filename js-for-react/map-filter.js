let names = ["Aditya","x","y","Aditya","Aditya"];

names.map((name) => {
    return <h1>{name}</h1>
})

names.filter((name) => {
    return name !== "Aditya"
})
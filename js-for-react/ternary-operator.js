let age = 16;
let name = age > 10 ? "Adi" : "Jack";
console.log(name)

const Component = () => {
    return age > 10 ? <div>Adi</div> : <div>Jack</div>
}
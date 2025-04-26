let obj = {
    name:"raja singh",
    age : 30,
    city:"samastipur",
    greet:function(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}
//Constructor function 
//how to make constructor func with old method

function Cupcake(name,age,city,country){
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;

}

let p1 = new Cupcake("rohan",32,"samastipur","india")
let p2 = new Cupcake("raja",3,"darbhanga","america")
let p3 = new Cupcake("rupa",22,"muzaffarpur","india")


class toffe{
    constructor(flavour,size,taste,color){
        this.flavour = flavour
        this.size = size
        this.taste = taste
        this.color = color
        this.price = 30
    }
}
let t1 = new toffe("chocolate","medium","choco","brown",40)
let t2 = new toffe("straberry","large","steaw","red",60)
let t3 = new toffe("magiyano","long","mago","yellow",40)
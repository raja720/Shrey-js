// Object Literal
let obj = {
  name: "raja singh",
  age: 30,
  city: "samastipur",
  greet: function () {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  }
};

// Constructor Function
function Cupcake(name, age, city, country) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.country = country;
}

// Class-based Constructor
class Toffe {
  constructor(flavour, size, taste, color) {
    this.flavour = flavour;
    this.size = size;
    this.taste = taste;
    this.color = color;
    this.price = 30;
  }
}

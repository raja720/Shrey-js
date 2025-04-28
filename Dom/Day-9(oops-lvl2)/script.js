function Toffee(name,color){
    this.name = Toffee
this.color = color
}

Toffee.prototype.price = 10;

let t1 = new Toffee("alpenliebe","red");
let t2 = new Toffee("munch","brown");


function ToffeeMachine(name){
    this.name = "*)"+ name;
    this.sayMyname = function(){
        console.log(this.name);
    }
}

 let t3 = new ToffeeMachine("kachha aam")
 let t4 = new ToffeeMachine("kachha laal")
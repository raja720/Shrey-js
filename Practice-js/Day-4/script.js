function callerfinc(fn){
    setTimeout(fn , 3000)

}

callerfinc(function(){
    console.log("hey");
})
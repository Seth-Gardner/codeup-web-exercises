var showMultiplicationTable = function(){
    for(let i = 1; i <= 10; i++){
        console.log("7 * " + i + " = " + 7 * i)
    }
}
var randomNumber = function(){
    for(let i = 0; i < 10; i++){
        let x = rndInt = Math.floor(Math.random() * 180) + 20
        if(x % 2 === 0){
            var isEven = " true"
        }else{isEven = " false"}
        console.log(x + isEven)
    }
}
var pyramidOfNumbers = function() {
    for(let i = 1; i < 10; i++){
        console.log(i.toString().repeat(i))
    }
}
var idk = function(){
    for(let i = 100; i > 0; i = i - 5){
        console.log(i)
    }
}

showMultiplicationTable()
randomNumber()
pyramidOfNumbers()
idk()

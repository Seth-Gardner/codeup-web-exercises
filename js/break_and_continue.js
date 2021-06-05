let num = prompt("Please enter an odd number between 1 and 50")
while(num % 2 === 0 || num < 1 || num > 50){
    num = prompt("Please enter an odd number")
}
console.log("The number to skip is " + num)
for(let i = 1; i < 50; i++){
    if(i % 2 === 0){
    }else {
        if(i == num){
            console.log("Yikes! Skipping number: " + i)
            continue;
        }
        console.log("Here is odd number: " + i)
    }
}
let i = 1
while(i <= 16){
    console.log(2 ** i);
    i++
}

var coneTotal = Math.floor(Math.random() * 50) + 50;

do{
    let conesBought = Math.floor(Math.random() * 5) + 1;
    if(coneTotal >= conesBought){
        coneTotal = coneTotal - conesBought;
        console.log(conesBought + " cones sold");
    } else{ console.log("Cannot sell you " + conesBought + " I only have " + coneTotal)}
} while(coneTotal > 0);
console.log("Yay! I sold them all")
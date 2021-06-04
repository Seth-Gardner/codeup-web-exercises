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
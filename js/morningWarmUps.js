// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
function countSpaces(str) {
    if(typeof(str) !== 'string') {return false}
    return str.split(" ").length - 1
}



// TODO: Add validation to function above, if the argument pass is not a string it should return false.

console.log(countSpaces("i have 3 spaces"))
console.log(countSpaces("  "))
console.log(countSpaces(false))
console.log(countSpaces(34))
console.log(countSpaces(true))
console.log(countSpaces(['i have coffee']))
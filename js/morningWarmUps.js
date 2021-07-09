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

// July 6th 2021
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
function capitalizeAllNames(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].toUpperCase())
    }
    return(newArr)
}
console.log(capitalizeAllNames(['your mom', 'hi', 'seth']))

// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
function capitalizeFirstLetter(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
    }
    return(newArr)
}
console.log(capitalizeFirstLetter(['freddie', 'hi', 'samuel']))


// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
var personOne = {
    firstName: "silvia",
    lastName: "floopertan",
    ageInYears: 34,
    heightInInches: 65,
    getFullName: function () {
        return this.firstName + " " + this.lastName
    }
}

console.log(personOne.getFullName())
// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73,
    getNicelyFormattedFullName: function() {
        return capitalizeFirstLetter([this.firstName]) + ' ' + capitalizeFirstLetter([this.lastName])
    }
}
console.log(personTwo.getNicelyFormattedFullName())
// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62,
    helloMessage: function() {
        return "Hello, My name is " + capitalizeFirstLetter([this.firstName]) + ' ' + capitalizeFirstLetter([this.lastName]) + "and I am " + this.ageInYears + " years old."
    }
}
console.log(personThree.helloMessage())

// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
function strToArr(arr) {
    let objArr = [];
    for (let i = 0; i < arr.length; i++){
        objArr.push({originalString: arr[i], lengthOfOriginalString: arr[i].length})
    }
    return objArr
}
console.log(strToArr(['hello', 'dave']))
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]
// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
function objToStr(obj) {
    let newStr = ''
    for(let i = 0; i < obj.length; i++){
        newStr += obj[i].originalString + ' '
    }
    return newStr
}
console.log(objToStr(strToArr(['hello', 'dave'])))
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"
// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.
var people = [personOne,personTwo,personThree];
function getTallUsers(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(people[i].heightInInches >= 65)
            newArr.push(arr[i])
    }
    return newArr
}

console.log(getTallUsers(people));
// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//

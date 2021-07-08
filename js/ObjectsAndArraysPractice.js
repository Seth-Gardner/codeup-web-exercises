function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let k = i + 1; k < arr.length; k++) {
            if(arr[i] === arr[k]) {
                arr.splice(k, 1)
            }
        }
    }
    return x
}
console.log(removeDuplicates(["bob","squid","samantha","bob"]));
// Should return the following
["bob","squid","samantha"]

console.log(removeDuplicates(["tilda","tilda"]));
// Should return the following
["tilda"]

console.log(removeDuplicates(["2016-02-13","1994-12-21","2016-02-13","2016-02-13","2005-11-29"]));
// Should return the following
["1994-12-21","2016-02-13","2005-11-29"]

function max(arr) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr.splice(i, 1)
        }
    }
    arr.sort()
    return arr[arr.length]
}

max([4,34,193,2,345,46,0]);
// Should return the following
345

max([-34,83,21,38,-2039,3.2]);
// Should return the following
83

max([54.5,2,34,-93]);
// Should return the following
54.5

mostOccuringNumber([8,93,28,8,27,-62,32,8,-62]);
// Should return the following
8

mostOccuringNumber([8,93,-62.0,28,27,-62,32,8,-62]);
// Should return the following
-62

mostOccuringNumber([73.5,8,0,-3,3.50,8.25,3.50]);
// Should return the following
3.5

var students = [
    {
        name: "Phill Rundy",
        classAverage: 53
    },
    {
        name: "Samuel Moore",
        classAverage: 71
    },
    {
        name: "Mark Tendly",
        classAverage: 84
    },
    {
        name: "Dough Mosh",
        classAverage: 87
    },
    {
        name: "Bran Thomb",
        classAverage: 93
    },
    {
        name: "Mario Yushi",
        classAverage: 82
    },
    {
        name: "Nathan Skywalker",
        classAverage: 52
    }
]

whoIsPassing(students);
// Should return the following
[
    {
        name: "Phill Rundy",
        passing: false
    },
    {
        name: "Samuel Moore",
        passing: true
    },
    {
        name: "Mark Tendly",
        passing: true
    },
    {
        name: "Dough Mosh",
        passing: true
    },
    {
        name: "Bran Thomb",
        passing: true
    },
    {
        name: "Mario Yushi",
        passing: true
    },
    {
        name: "Nathan Skywalker",
        passing: false
    }
]

dateStringToObject("2016-2-13");
// Should return the following
{month: 2, day: 13, year: 2016}

dateStringToObject("2005-11-29");
// Should return the following
{month: 11, day: 29, year: 2005}

dateStringToObject("1994-12-21");
// Should return the following
{month: 12, day: 21, year: 1994}

reverseString("squid");
// Should return the following
"diuqs"

reverseString("tilda");
// Should return the following
"adlit"

reverseString("2016-02-13");
// Should return the following
"31-21-6102"

numberInfo(-1);
// Should return the following
{
    isPositive: false,
        isEven: false,
    isZero: false
}

numberInfo(6);
// Should return the following
{
    isPositive: true,
        isEven: true,
    isZero: false
}

numberInfo(0);
// Should return the following
{
    isPositive: false,
        isEven: true,
    isZero: true
}
console.log("i am working");
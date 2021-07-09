function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                arr.splice(j, 1)
            }
        }
    }
    return arr
}

console.log(removeDuplicates([1, 2, 4, 6, 8, 8, 6, 4, 2, 1]));
console.log(removeDuplicates(['apple', 'justin', 'cup', 'justin']));

function mostOcc(arr) {
    let bigObj = {
        number: 0,
        count:0
    }
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                count += 1
            }
        }
        if (count > bigObj.count){
            bigObj.number = arr[i];
            bigObj.count = count;
        }
    }
    return bigObj.number
}

console.log(mostOcc([1, 2, 2, 1, 1,2,2,2,2]));
console.log(mostOcc([1, 2, 2, 2, 4, 5,5,5,5,5]));
console.log(mostOcc([1, 2, 3, 4, 5, 3]));
console.log(mostOcc(['seth', 'seth', 'freddie', 'dad', 'morgan','freddie','freddie']));
console.log(mostOcc(['poop', 'gay', 'trashtruck', 'smooch', 'gay',"trashtruck", 'trashtruck']));
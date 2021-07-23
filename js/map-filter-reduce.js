const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

console.log(users.filter(function (n) {
    return n.languages.length >= 3
}));

console.log(users.map(function (n) {
    return n.email
}));
let totalYears = users.reduce((accumulation, user) => {
    return accumulation + user.yearsOfExperience;
}, 0)

console.log(totalYears);

let longestEmail = users.reduce(function (currentLongest, user){
    if(user.email.length > currentLongest.email.length){
        return user
    }
    else{
        return currentLongest
    }
}, users[0])

console.log(longestEmail.email);

let nameString = users.reduce(function (accumulator, user){
    return accumulator + user.name + " "
}, "Your instructors are: ");

console.log(nameString);
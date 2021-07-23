function getUsersFromGithubAsJSON(username) {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': github_api}})
        .then(function (response) {
            return response.json()
        });
}
getUsersFromGithubAsJSON(`Seth-Gardner`)
    .then(function(response){
        console.log(response[0].created_at)
})

function makeRequest(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("it worked")
        }, time);
    });
}
makeRequest(3000)
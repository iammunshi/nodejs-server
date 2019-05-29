const https = require('https');
function fetchPosts() {
    return new Promise((resolve, reject) => {
        let data = '';
        https.get('https://jsonplaceholder.typicode.com/posts', (resp) => {
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(data)
            });

        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    })

}
module.exports = {
    fetchPosts
}
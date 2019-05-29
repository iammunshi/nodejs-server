var express = require('express');
const app = express();
const Data = require('../model/posts')


function startServer(hostname, port) {
    app.get('/posts', function (req, res, next) {
        const newData = Data.fetchPosts()
        newData.then(respp=>{
            res.status(200).send({
                success: 'true',
                message: 'posts retrieved successfully',
                data: JSON.parse(respp)
            })
            res.end()
        })   
        
        
    });
    app.listen(port, () => {
        console.log(`server running on port ${port}`)
    });
}
module.exports = {
    startServer
};
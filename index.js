const express = require('express')
const mongoose = require('mongoose')
const app = express()



app.get('/', (req, res) => {
    res.send("hello 3001");    
});

mongoose.connect("mongodb+srv://marcuslinglt:sE3HVvw8BiByGZF9@nodesimplecrud.beqfjyb.mongodb.net/?retryWrites=true&w=majority&appName=NodeSimpleCRUD")
    .then(() => {
        console.log("Connected to MongoDB");
        // listen to port 3000
        app.listen(3000,  () => {
            console.log('Server running on port 3000...')
        });
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB");
        console.log(err);
    })
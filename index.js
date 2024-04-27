const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const app = express()
const productRoutes = require('./routes/product.route')

// middleware
// make this server accept json data and form data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// localhost:3000/api/products route is defined in routes/product.route.js
app.use("/api/products", productRoutes)

mongoose.connect(config.connectionString)
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
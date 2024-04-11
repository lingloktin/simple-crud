const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const config = require('./config')
const app = express()

// make this server accept json data
app.use(express.json())

app.get('/', (req, res) => {
    res.send("this is a response from the server for get request");    
});

// app.post('/test-post', (req, res) => {
//     console.log(req.body)
//     res.send(req.body)
// })
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

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
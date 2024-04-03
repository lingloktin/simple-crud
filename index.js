const express = require('express')
const app = express()

// listen to port 3000
app.listen(3000,  () => {
    console.log('Server running on port 3000...')
});

app.get('/', (req, res) => {
    res.send("hello 3000")
});
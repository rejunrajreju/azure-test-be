const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors())
const port = process.env.PORT || 3005;

// sendFile will go here
app.get('/test', function(req, res) {
    res.send({ message: 'awesome!!' })
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
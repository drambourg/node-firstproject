const express = require('express');
const connection = require('./config/conf');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Welcome to Express');
});

app.get('/api/employees', (req, res) => {
    connection.query('SELECT * from employee', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving employees');
        } else {
            res.json(results);
        }
    });
});



app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }

    console.log(`Server is listening on ${port}`);
});
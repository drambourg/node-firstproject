const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('Welcome to Express');
});

app.get('/api/movies', (request, response) => {
    response.send('All Films');
});

app.get('/api/movies/:movieid', (request, response) => {
    response.json({ movie: request.params.movieid });
});

app.get('/api/employees', (request, response) => {
    response.sendStatus(404);
});

app.get('/api/employee', (request, response) => {
    const name = request.query.name;
    response.status(404).send('Unable to retrieve employee ' + name);
});

app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }

    console.log(`Server is listening on ${port}`);
});
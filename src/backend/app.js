const express = require('express');
const app = express();
const port = 3001;
const movieList = require('./movieList')

app.get('/rest/movie', (req, res) => res.send(movieList))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const movieList = require('./movieList')
const path = require('path')

app.get('/rest/movie', (req, res) => res.send(movieList))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(express.static(path.join(__dirname, '../../build')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

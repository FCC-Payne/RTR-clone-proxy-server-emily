const express = require('express');
const path = require('path');

const app = express();

app.use('/:id', express.static(path.join(__dirname, '/../public')));

app.get('/:id/reviews', (req, res) => {
// localhost/req.params.id/
});

app.listen(3000);

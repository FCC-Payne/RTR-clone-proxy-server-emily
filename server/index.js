const express = require('express');
const path = require('path');

const app = express();

app.use('/:id', express.static(path.join(__dirname, '/../public')));

app.get('/:id/reviews/bundle', (req, res) => {
    console.log('--------hello');
    res.redirect(`http://localhost:3002/${req.params.id}/bundle.js`);
});

app.get('/:id/reviews/styles', (req, res) => {
    res.redirect(`http://localhost:3002/${req.params.id}/stylesheet.css`);
});

// app.get('/:id/reviews', (req, res) => {
//     res.redirect(`http://localhost:3002/${req.params.id}/reviews`);
// });

app.listen(3000);

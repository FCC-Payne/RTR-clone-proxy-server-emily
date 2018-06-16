const express = require('express');
const path = require('path');

const app = express();

app.use('/:id', express.static(path.join(__dirname, '/../public')));

/* PHOTO VIEWER */
app.get('/:id/photos/bundle', (req, res) => {
    res.redirect(`http://localhost:3001/${req.params.id}/bundle.js`);
});

app.get('/:id/photos/styles', (req, res) => {
    res.redirect(`http://localhost:3001/${req.params.id}/styles.css`);
});

/* PRODUCT FORMS */
app.get('/:id/forms/bundle', (req, res) => {
    res.redirect(`http://localhost:3003/${req.params.id}/bundle.js`);
});

/* RECS CAROUSEL */
app.get('/:id/recs/bundle', (req, res) => {
    res.redirect(`http://localhost:3004/${req.params.id}/bundle.js`);
});

app.get('/:id/recs/styles', (req, res) => {
    res.redirect(`http://localhost:3004/${req.params.id}/styles.css`);
});

/* REVIEWS */
app.get('/:id/reviews/bundle', (req, res) => {
    res.redirect(`http://localhost:3002/${req.params.id}/bundle.js`);
});

app.get('/:id/reviews/styles', (req, res) => {
    res.redirect(`http://localhost:3002/${req.params.id}/stylesheet.css`);
});

app.listen(3000);

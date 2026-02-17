const express = require('express');
const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Static folder
app.use(express.static('public'));

// Home Page
app.get('/', (req, res) => {
    res.render('home');
});

// Signup Page
app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/dashboard', (req, res) => {

    console.log(req.query);

    const obj = {
        data: req.query
    };

    res.render('dashboard', obj);
});

// 404 Page
app.use((req, res) => {
    res.status(404).send("<h1>404 Page Not Found</h1>");
});

const HOST = '127.0.0.1';
const PORT = 3000;

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public/'));
app.use(express.urlencoded({ extended: true }));

// Home Page
app.get('/', (req, res) => {
    res.render('home');
});

// Products Page
app.get('/products', (req, res) => {
    res.render('products');
});

// Display Page
app.post('/display', (req, res) => {

    console.log(req.body);

    const obj = { data: req.body };

    res.render('display', obj);
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

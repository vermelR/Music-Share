const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
    let users = fs.readFileSync('./users.json').toString('utf-8');
    users = JSON.parse(users);
    return res.render('index', {
        "user": users["prgmaz"],
    });
});
app.get('/:username', (req, res) => {
    let users = fs.readFileSync('./users.json').toString('utf-8');
    users = JSON.parse(users);
    return res.render('index', {
        "user": users[req.params.username],
    });
});
app.get('*', (req, res) => {
    return res.status(404).send("<h1>404 Page not Found!</h1>");
});
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}/`);
});
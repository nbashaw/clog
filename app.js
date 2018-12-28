require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
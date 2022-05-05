const config = require('./config/app');
const express = require('express');
const bodyParser = require("body-parser");
const routes = require('./routes/routes');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

const PORT = config.port;

app.listen(PORT, () => {
    console.log(`app started on port http://localhost:${PORT}`)
});
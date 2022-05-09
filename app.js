import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/routes.js'

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

export default app
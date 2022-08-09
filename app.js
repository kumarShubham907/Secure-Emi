import express from 'express'
import { APP_PORT } from './src/config';
import route from './src/routes';
import './src/database/mongoose';
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api",route)

app.listen(APP_PORT, () => console.log("App running on PORT", APP_PORT));

import express from 'express'
import { Auth } from './middleware/Aut';
import { REACT_APP_PORT } from './constant/environment';

const app = express()

app.get('/', (req, res) => {
    res.send('hello world',Auth)
})

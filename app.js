import express from 'express'
import { APP_PORT } from './src/config';
import router from './src/routes';
const app = express()

app.use("/api",router)

app.listen(APP_PORT, () => console.log("App running on PORT", APP_PORT));

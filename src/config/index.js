import dotenv from "dotenv"
dotenv.config({ path: '.env' });

export const {
    APP_PORT,
    MONGO_URI,
    JWT_SECRET_KEY,
} = process.env 

import mongoose from 'mongoose';
import { MONGO_URI } from '../config';

mongoose.connect(MONGO_URI, () => console.log("Database Connected Successfully"));
import mongoose from 'mongoose';
const { v4: uuidv4 } = require('uuid')
const { Schema } = mongoose;

const userSchema = new Schema({
    userId: {
        type: String,
        default: uuidv4
    },
    mobileNo: Number,
    password: String,
    roles: String,
    status: String,
},
    { timestamps: true }
);

export default mongoose.model('User', userSchema);
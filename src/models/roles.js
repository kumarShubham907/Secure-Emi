import mongoose from 'mongoose';
const { Schema } = mongoose;

const roleSchema = new Schema({
    name: String,
});

export default mongoose.model('Role', roleSchema);
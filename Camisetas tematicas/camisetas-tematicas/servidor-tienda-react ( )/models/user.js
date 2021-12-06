import mongoose from 'mongoose';
const { appConfig } = require('../config')

const Schema = mongoose.Schema;

const authSchema = new Schema({
    email: {type: String, required: [true, 'Usuario obligatorio']},
    // password: String,
    rol: String
})


const User = mongoose.model('User', authSchema);
export default User;
// models/userModel.ts
import mongoose, { Schema } from 'mongoose'
import { IUser } from '../types/todo'

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        minlength: 4,
    },
    phone: {
    type: Number,
    required: true,
    unique: true,

},
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

const User = mongoose.model<IUser>('User', userSchema)
export default User
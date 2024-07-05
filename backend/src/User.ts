import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
}

const UserSchema: Schema = new Schema({
    firstName: { type: String, required: true, maxlength: 100 },
    lastName: { type: String, required: true, maxlength: 100 },
    email: { type: String, required: true, unique: true },
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;

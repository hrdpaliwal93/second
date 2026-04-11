import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    username: String,
    password: String
});
export const userModel = model('users', userSchema);
//# sourceMappingURL=db.js.map
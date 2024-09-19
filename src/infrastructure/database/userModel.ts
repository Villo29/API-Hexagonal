import mongoose, { Document, Schema } from 'mongoose';
import { Store } from '../../domain/entities/store';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    stores: Store[]; // Añadir esta línea
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    stores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Store' }] // Añadir esta línea
});

const UserModel = mongoose.model<IUser>('User', UserSchema);
export default UserModel;
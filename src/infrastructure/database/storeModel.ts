import mongoose, { Document, Schema } from 'mongoose';

export interface IStore extends Document {
    name: string;
    address: string;
    location: string;
}

const StoreSchema: Schema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    location: { type: String, required: true }
});

const StoreModel = mongoose.model<IStore>('Store', StoreSchema);
export default StoreModel;
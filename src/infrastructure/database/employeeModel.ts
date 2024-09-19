import mongoose, { Document, Schema } from 'mongoose';

export interface IEmployee extends Document {
    name: string;
    storeId: string;
}

const EmployeeSchema: Schema = new Schema({
    name: { type: String, required: true },
    storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true }
});

const EmployeeModel = mongoose.model<IEmployee>('Employee', EmployeeSchema);
export default EmployeeModel;
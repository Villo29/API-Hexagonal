import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/mongoConnection';
import userRoutes from '../interfaces/routes/userRoutes';
import storeRoutes from '../interfaces/routes/storeRoutes';
import employeeRoutes from '../interfaces/routes/employeeRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

connectDB();

app.use(express.json());
app.use(userRoutes); 
app.use(storeRoutes);
app.use(employeeRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
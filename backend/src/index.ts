import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { UserController } from './UserController';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
console.log('port:',port);

app.use(cors());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in the .env file');
}

mongoose.connect('mongodb://localhost:27017/user-management', {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

app.use('/users', UserController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express, { Application } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app: Application = express();
app.use(bodyParser.json());

const dbUrl: string = 'mongodb://172.17.0.2:27017/cocktails';
mongoose.connect(dbUrl).then(() => {
	console.log('Connected to database');
}).catch((error) => {
	console.log('Connection failed:', error.message);
});

export default app;

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bhashini from 'bhashini-translation';

// Initialize express
const app = express();

// Load env variables
dotenv.config();

// To allow cross-origin requests
app.use(cors());

// JSON body parser
app.use(express.json());

// Default route
app.get('/', (req, res) => {
	res.send("Hello, Welcome to the API for Bhashini's Project!");
});

// Initialize Bhashini
const userID = process.env.USER_ID;
const APIKey = process.env.API_KEY;
const InferenceAPIKey = process.env.INFERENCE_API_KEY;
bhashini.auth(userID, APIKey, InferenceAPIKey);

// port to listen on
const port = process.env.PORT || 5023;

// Listen on port
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

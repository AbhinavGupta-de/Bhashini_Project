import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import nmtrouter from './routes/nmt.js';
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

// Route to NMT
app.use('/translate', nmtrouter);

// port to listen on
const port = process.env.PORT || 5023;

// Listen on port
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

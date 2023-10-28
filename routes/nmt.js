import bhashini from 'bhashini-translation';
import express from 'express';
import dotenv from 'dotenv';

const router = express.Router();

// Language codes
const lang = {
	1: 'en',
	2: 'hi',
	3: 'bn',
	4: 'gu',
	5: 'kn',
	6: 'ml',
	7: 'mr',
	8: 'or',
	9: 'pa',
	10: 'ta',
	11: 'te',
	12: 'as',
};

// Supported Lanugages

// Tamil (ta)
// Telugu (te)
// Hindi (hi)
// Malayalam (ml)
// Marathi (mr)
// Bengali (bn)
// Assamese (as)
// Gujarati (gu)
// Kannada (kn)
// Oriya (or)
// Punjabi (pa)

// languages: [
// 	{
// 		sourceLanguage: 'bn',
// 		targetLanguageList: ['en', 'as', 'gu', 'hi'],
// 	},
// 	{
// 		sourceLanguage: 'en',
// 		targetLanguageList: ['ml', 'mr', 'or', 'pa', 'ta', 'te'],
// 	},
// 	{
// 		sourceLanguage: 'hi',
// 		targetLanguageList: ['en', 'as', 'bn', 'gu', 'kn'],
// 	},
// ];

// Load env variables
dotenv.config();

// Initialize Bhashini
const userID = process.env.USER_ID;
const APIKey = process.env.API_KEY;
const InferenceAPIKey = process.env.INFERENCE_API_KEY;

bhashini.auth(userID, APIKey, InferenceAPIKey);

// Route to translate text
router.post('/', async (req, res) => {
	const { source, content, target } = req.body;

	const responseToSend = {
		status_code: 200,
		message: '',
		translated_content: {},
	};

	if (!content || !source || !target) {
		responseToSend.status_code = 400;
		responseToSend.message = 'Missing required fields';
		return res.send(responseToSend);
	}

	if (target === 'en') {
		responseToSend.status_code = 400;
		responseToSend.message = 'Target language cannot be English';
		return res.send(responseToSend);
	}

	const response = await bhashini.nmt(lang[source], lang[target], content);
	//we have to send response back in the format of {statuscode : 200, message: '', data : response}
	responseToSend.translated_content = response;
	responseToSend.message = 'Success';
	return res.send(responseToSend);
});

export default router;

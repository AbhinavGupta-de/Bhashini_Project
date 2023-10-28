# Backend For Bhashini Project

## Description

This is the backend of the API for the Bhashini Project. It is written in Node.js and uses Express.js as the web framework. It uses the Bhashini API to perform the required tasks.

## Endpoints

The following endpoints are available:

- Translate[NMT]: /translate

## Language Codes

```javascript
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
```

## Local Setup

1. Clone the repository
2. Run `npm install` to install the dependencies
3. You will need to add a .env file to your project the template for which is given in the .env.example file
4. Run `npm start` to start the server
5. The server will be running on port 5023 by default

## Future Work

- Speech to Text[ASR]: /speech-to-text
- Text to Speech[TTS]: /text-to-speech
- Speech to Text Translation[ASR-NMT]: /speech-to-text-translate
- Text to Speech Translation[NMT-TTS]: /translate-text-to-speech
- Speech to Speech Translation[ASR-NMT-TTS]: /speech-to-speech

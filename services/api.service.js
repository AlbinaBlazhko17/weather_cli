import https from 'https';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';
import axios from 'axios';

const API = 'bc52a54cec550dace75647363e61b372';

export const getWeather = async (city) => {
	const token = await getKeyValue(TOKEN_DICTIONARY.token);
	if(!token) {
		throw new Error('Doesn`t exist api key');
	}

	const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
		params: {
			q: city,
			appid: token,
			lang: 'us',
			units: 'metric'
		}
	});
	return data;
};
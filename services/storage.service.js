import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather_cli.json');

export const TOKEN_DICTIONARY = {
	token: 'token',
	city: 'city'
}

export const saveKeyValue = async (key, value) => {
	let data = await readDataFile();
	data[key] = value;
	await promises.writeFile(filePath, JSON.stringify(data));
}

export const getKeyValue = async (key) => {
	let data = await readDataFile();
	if(data) {
		
		return data[key];
	}
	return undefined;
}

const isExist = async (path) => {
	try {
		await promises.stat(path);
		return true;
	} catch(e) {
		return false;
	}
}

const readDataFile = async () => {
	if(await isExist(filePath)) {
		const file = await promises.readFile(filePath);
		return JSON.parse(file);
	}
	return undefined;
}
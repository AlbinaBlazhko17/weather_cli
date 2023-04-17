import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather_cli.json');

export const saveKeyValue = async (key, value) => {
	let data = readDataFile();
	data[key] = value;
	await promises.writeFile(filePath, JSON.stringify(data));
}

export const getKeyValue = async (key) => {
	let data = readDataFile();
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
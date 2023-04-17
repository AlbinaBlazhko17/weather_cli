#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
	try{
		await saveKeyValue('token', args.t);
		printSuccess('Token saved');
	} catch(e) {
		printError(e.messages);
	}
}

const initCLI = () => {
	const args = getArgs(process.argv);
	if (args.h) {
		printHelp();
	}
	if (args.s) {

	}
	if (args.t) {
		return saveToken(args.t);
	}
};

initCLI();
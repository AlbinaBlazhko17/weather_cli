import chalk from "chalk";
import dedent from "dedent-js";

export const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

export const printSuccess = (success) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + success);
};

export const printHelp = () => {
	console.log (
		dedent`${chalk.bgBlue(' HELP ')}
		Without any parametrs - output weather
		-s [CITY] for set city
		-h for get help
		-t [API_KEY] for set token
		`
	);
};
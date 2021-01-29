// const chalk = require('chalk')

const log = (title, msg, color) => console.log(title, msg)
// const log = (title, msg, color = 'blue') => console.log(`${chalk[color].bold(title)} : ${chalk[color](msg)}`)

const logger = {
	info: message => log('INFO', message, 'blue'),
	warn: message => log('WARNING', message, 'yellow'),
	error: message => log('ERROR', message, 'red'),
	success: message => log('SUCCESS', message, 'green'),
	green: message => console.log(message),
	blue: message => console.log(message),
	red: message => console.log(message),
	yellow: message => console.log(message),
	blueBold: message => console.log(message),
}

module.exports = logger

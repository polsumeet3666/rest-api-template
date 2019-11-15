const log4js = require("log4js");
const config = require("../config.json");

log4js.configure({
	appenders: {
		console: { type: "console" },
		wrapperApi: {
			type: "dateFile",
			filename: config.logger.filename,
			pattern: ".yyyy-MM-dd-hh"
		}
	},
	categories: {
		default: { appenders: ["console"], level: "debug" },
		wrapperApi: { appenders: ["wrapperApi"], level: config.logger.level }
	}
});
const logger = log4js.getLogger("wrapperApi");

module.exports = logger;

const express = require("express");
const app = express();
const log4js = require("log4js");
const { port } = require("./config.json");
const router = require("./routes");

const logger = require("./logger");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(router);

app.use(
	log4js.connectLogger(logger, {
		level: "auto"
	})
);

// error handling
app.use(function(req, res, next) {
	logger.info(
		`url:${req.url} headers: ${req.headers} method:${req.method} ${
			req.body ? JSON.stringify(req.body) : "{}"
		}`
	);
	next();
});

app.listen(port, () => {
	console.log(`wrapper api v2.0 listening on port ${port}!`);
	logger.debug(`wrapper api v2.0 listening on port ${port}!`);
});

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hello World");
});

router.post("/profile", function(req, res, next) {
	//console.log(req.body);
	res.json(req.body);
	next();
});

module.exports = router;

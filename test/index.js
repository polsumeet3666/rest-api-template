let supertest = require("supertest");
let assert = require("chai").assert;
let expect = require("chai").expect;
let server = supertest.agent("http://localhost:3000");

describe("api test", () => {
	it("get /", done => {
		server
			.get("/")
			.expect(200)
			.end(function(err, res) {
				expect(res.body);
				done(err);
			});
	});
});

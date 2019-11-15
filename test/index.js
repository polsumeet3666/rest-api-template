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
				done();
			});
	});

	it("post /profile", done => {
		let book = {
			title: "book1",
			author: "sam"
		};
		server
			.post("/profile")
			.send(book)
			.expect(200)
			.end((err, res) => {
				expect(res.body);
				//console.log(res.body);
				done();
			});
	});
});

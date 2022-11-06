// const assert = require("assert");

// function add(num1, num2) {
// 	return num1 + num2;
// }

// assert.strictEqual(add(2, 2), 4);
// assert.strictEqual(add(4, 6), 10);

//

// add.spec.js
const { add } = require("./funcs");

describe("add", () => {
	test("correctly returns the sum of two numbers", () => {
		expect(add(2, 2)).toBe(4);
		expect(add(4, 6)).toBe(10);
	});
});

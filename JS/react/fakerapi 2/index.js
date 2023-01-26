const faker = require("faker");

const express = require("express");
const app = express();
const port = 8000;

const newUserObj = () => ({
	_id: faker.datatype.uuid(),
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	phoneNumber: faker.phone.phoneNumber(),
	email: faker.internet.email(),
	password: faker.internet.password(),
});
console.log(newUserObj());

const newCompanyObj = () => ({
	_id: faker.datatype.uuid(),
	name: faker.company.companyName(),
	address: faker.address.streetAddress(),
	city: faker.address.cityName(),
	state: faker.address.state(),
	zip: faker.address.zipCode(),
	country: faker.address.country(),
});
console.log(newCompanyObj);

app.get("/api/users/new", (req, res) => {
	const newUser = newUserObj();
	res.json(newUser);
});

app.get("/api/company/new", (req, res) => {
	const newCompany = newCompanyObj();
	res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
	const newUser = newUserObj();
	const newCompany = newCompanyObj();
	const newRelationship = {
		user: newUser,
		company: newCompany,
	};
	res.json(newRelationship);
});

app.listen(port, () => console.log(`party on the port! ${port}`));

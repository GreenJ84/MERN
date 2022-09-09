
const app = express();
const port = 8000;
import express from 'express';
import { faker } from '@faker-js/faker';


const createUser = () => {
    const user = {
        id: faker.random.numeric(2),
        firstName: faker.name.firstName(),
        lastName: ""+faker.name.middleName()+""+ faker.name.lastName(),
        phoneNumber: faker.phone.number('+# ###-###-###'),
        email: faker.internet.email(),
        password: faker.random.alphaNumeric(12)
    };
    return user;
};

const createCompany = () => {
    const company = {
        id: faker.random.numeric(2),
        name: faker.company.name(),
        motto: faker.company.catchPhrase(),
        address: {
            street: faker.address.streetAddress(true),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return company;
};




app.get("/api/users/new", (req, res) => {
    res.json( createUser() );
});
app.get("/api/companies/new", (req, res) => {
    res.json( createCompany() )
});
app.get("/api/user/company", (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    })
});

app.listen( port, () => console.log(`Rockets blazing, nav set for quadrant ${port}`) );
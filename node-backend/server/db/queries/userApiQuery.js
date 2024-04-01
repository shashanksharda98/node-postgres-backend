const pool = require('../db');
const bycrypt = require('bcrypt');


const createUser = async (reqBody) => {


    const {
        email,
        password,
        first_name,
        last_name,
        date_of_birth,
    } = reqBody;

    const registration_data = new Date();

}
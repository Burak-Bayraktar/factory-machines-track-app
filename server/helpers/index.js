const { default: axios } = require("axios");
const qs = require("qs");
require('dotenv').config();

const LoginToSystem = async () => {
    const credentials = {
        username: process.env.USER_NAME,
        password: process.env.PASSWORD,
        react: process.env.REACT,
      }
    
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
  
    const result = await axios.post(process.env.API_URL, qs.stringify(credentials), headers);
    return result;
}

module.exports.LoginToSystem = LoginToSystem
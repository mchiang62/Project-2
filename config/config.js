require('dotenv').config(); // this is important!

module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "port": 3307,
        "dialect": "mysql"
    },

    "production": {
        "use_env_variable": process.env.JAWSBD_URL,
        "dialect": "mysql"
    }
};
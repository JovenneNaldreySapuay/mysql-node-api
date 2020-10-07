if (process.env.NODE_ENV !== 'production') require('dotenv').config()

module.exports = {
	mysql: {
		connectionLimit: 10,
        host: `${process.env.HOST}`,  
        user: `${process.env.USER}`,
        password: `${process.env.PASSWORD}`,
        database: `${process.env.DATABASE}`,
        port: "3306",
	},
	secret_key: `${process.env.SECRET_KEY}`
}
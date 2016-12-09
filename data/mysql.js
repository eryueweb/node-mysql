module.exports = {
	db: {
		connectionLimit: 10,
		host: 'localhost',
		user: 'root',
		password: 'root',
		port: '3306',
		database: 'huaban',
		queueLimit: 2,
		waitForConnections: true,
		acquireTimeout: 10000
	}
};

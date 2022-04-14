var config = {
	database: {
		host:	  '${aws_db_instance.example.address}', 	// database host
		user: 	  'admin', 		// your database username
		password: 'password', 		// your database password
		port: 	  3306, 		// default MySQL port
		db: 	  'symbiosdb' 		// your database name
	},
	server: {
		host: '*',
		port: '3000'
	}
}

module.exports = config

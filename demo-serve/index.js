const express = require('express')
const app = express()
const port = 3005
var mysql = require('mysql');
var cors = require('cors')
var connection = mysql.createConnection({
	
	host: 'localhost', // Database host ip
	user: 'phpmyadmin', // Database username
	password: 'Sagar@9785', // Database password
	database: 'product-list', //database name
	multipleStatements: true, // allow multiple query execution at a time
	whichdb: "LOCAL" // which db it is i.e. local-live-staging

});
app.use(cors());
app.get('/get-products?', (req, res) => {
	connection.query(`SELECT * FROM products LIMIT ${req.query.pageno * 3},3`, (err, data) => {
		res.send(data);
	})
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

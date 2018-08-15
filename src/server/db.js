const sqlite3 = require('sqlite3').verbose()
const Promise = require('bluebird')
const fs = require('fs')

const dir = './dist'
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir)
}

const db = new sqlite3.Database('./dist/arek-starter')
db.get = Promise.promisify(db.get)
db.all = Promise.promisify(db.all)

db.serialize(function() {
	db.run(
		'CREATE TABLE IF NOT EXISTS myTable (id INTEGER PRIMARY KEY, message STRING, isActive INTEGER)'
	)
	db.run(
		'INSERT OR IGNORE INTO myTable (id, message, isActive) VALUES (1, "QraphQl mutation was performed.", 0)'
	)
})

module.exports = {db}

const sqlite3 = require('sqlite3').verbose()
import {promisify} from 'bluebird'
import fs from 'fs'

const dir = './dist'
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir)
}

const db = new sqlite3.Database('./dist/arek-starter')
db.get = promisify(db.get)
db.all = promisify(db.all)

db.serialize(function() {
	db.run(
		'CREATE TABLE IF NOT EXISTS myTable (id INTEGER PRIMARY KEY, message STRING, isActive INTEGER)'
	)
	db.run(
		'INSERT OR IGNORE INTO myTable (id, message, isActive) VALUES (1, "QraphQl mutation was performed.", 0)'
	)
})

export {db}

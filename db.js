const sqlite3 = require('sqlite3').verbose()
import {promisify} from 'bluebird'

const db = new sqlite3.Database('./dist/arek-starter')
db.get = promisify(db.get)
db.all = promisify(db.all)

db.serialize(function() {
	db.run(
		'CREATE TABLE IF NOT EXISTS myTable (id INTEGER PRIMARY KEY, isActive INTEGER)'
	)
	db.run('INSERT OR IGNORE INTO myTable (id, isActive) VALUES (1, 0)')
})

export {db}

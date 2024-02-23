const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db/main.db", (err) => {
  if (err) console.error("Error connecting to database:", err.message);
  else console.log("Connected to the vehicles database.");
});

// created schema
db.serialize(() => {
  db.run(`
            CREATE TABLE IF NOT EXISTS tasks (
                id INTEGER PRIMARY KEY,
                taskname TEXT,
                desc TEXT,
                isDone INTEGER
            )
      `);
});

db.serialize(() => {
  db.get("SELECT COUNT(*) AS count FROM tasks", (err, row) => {
    if (err) {
      console.error("Error checking for existing records:", err.message);
      return;
    }

    if (row.count === 0) {
      db.run(
        `INSERT INTO tasks (taskname, desc , isDone) VALUES ("Do this first","Hand the letter to postman.", 0)`
      );
    } else console.log("Already contains data. Skipping adding data.");
  });
});

module.exports = db;
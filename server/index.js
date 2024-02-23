const express = require("express");
const cors = require("cors");
const db = require("./schema");

const PORT = 9872;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  db.all("SELECT * FROM tasks", (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    } else return res.status(200).send(rows);
  });
});

app.post("/tasks", (req, res) => {
  const { taskname, desc } = req.body;

  db.run(
    `INSERT INTO tasks (taskname,desc, isDone) VALUES (?,?, ?)`,
    [taskname, desc, 0],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      db.all("SELECT * FROM tasks", (err, rows) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json(rows);
      });
    }
  );
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = req.params.id;

  db.run(`DELETE FROM tasks WHERE id = ?`, taskId, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    db.all("SELECT * FROM tasks", (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
  });
});

app.patch("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const { isDone } = req.body;

  db.run(
    `UPDATE tasks SET isDone = ? WHERE id = ?`,
    [isDone, taskId],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      db.all("SELECT * FROM tasks", (err, rows) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json(rows);
      });
    }
  );
});

app.listen(PORT, () => {
  console.log("Running on http://localhost:" + PORT);
});

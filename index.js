const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const port = process.env.PORT || 5000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "crudinfo",
});

app.use(cors());
app.use(express.json());

app.post("/cadastro", (req, res) => {
  const name = req.body.name;
  const user = req.body.user;
  const telefone = req.body.telefone;

  let SQL = "INSERT INTO dados ( name, user, telefone ) VALUES ( ?, ?, ?)";

  db.query(SQL, [name, user, telefone], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/getcadastro", (req, res) => {
  let MySQL = "SELECT * from dados";

  db.query(MySQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

// app.delete("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   let SQL = "DELETE FROM dados WHERE iddados = ?";

//   db.query(SQL, [id], (err, result) => {
//     if (err) console.log(err);
//     else res.send(result);
//   });
// });

app.listen(5000, () => {
  console.log("Rodando");
});

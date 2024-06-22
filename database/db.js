const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database: "NodeJSProject",
});

module.exports = pool.promise();

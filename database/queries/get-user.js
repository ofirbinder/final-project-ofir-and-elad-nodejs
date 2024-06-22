const doQuery = require("../query");

async function getUsernames(username, password) {
  const sql = `SELECT email, password FROM Customers WHERE email = ? AND password = ?`;
  const values = [username, password];
  const result = await doQuery(sql, values);
  return result;
}

module.exports = getUsernames;

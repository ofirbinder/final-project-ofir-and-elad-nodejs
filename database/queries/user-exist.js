const doQuery = require("../query");

async function userExists(username) {
  const sql = `SELECT * FROM Customers WHERE email = ?`;
  const values = [username];
  const result = await doQuery(sql, values);
  return result;
}

module.exports = userExists;

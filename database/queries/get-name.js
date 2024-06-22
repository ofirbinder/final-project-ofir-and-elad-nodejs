const doQuery = require("../query");

async function getFullName(username) {
  const sql = `SELECT firstName, lastName FROM Customers WHERE email = ?`;
  const values = [username];
  const result = await doQuery(sql, values);
  return result;
}

module.exports = getFullName;

const doQuery = require("../query");

async function getPhone(username, password) {
  const sql = `SELECT Phone FROM Customers WHERE email = ? AND password = ?`;
  const values = [username, password];
  const result = await doQuery(sql, values);
  return result;
}

module.exports = getPhone;

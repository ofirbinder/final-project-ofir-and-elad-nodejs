const doQuery = require("../query");

async function getServicePromt(username, serviceTitle) {
  const sql = `SELECT * FROM Orders WHERE emailCustomer = ? and service = ?`;
  const values = [username, serviceTitle];
  const result = await doQuery(sql, values);
  return result;
}

module.exports = getServicePromt;

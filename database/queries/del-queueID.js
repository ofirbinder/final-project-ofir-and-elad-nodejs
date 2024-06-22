const doQuery = require("../query");

async function deleteQueueByID(username) {
  const sql = `DELETE FROM Orders WHERE orderID = ?`;
  const result = await doQuery(sql, username);

  return result;
}

module.exports = deleteQueueByID;

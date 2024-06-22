const doQuery = require("../query");

async function getQueues(username) {
  const sql = `SELECT orderID , orderDate, orderHour , service  FROM Orders WHERE emailCustomer = ?`;
  const result = await doQuery(sql, username);
  if (result.length !== 0) {
    result[0].orderDate = String(result[0].orderDate).slice(0, 15);
    // cutting the unnecessary time from date and seconds from hour
    for (const key in result) {
      result[key].orderDate = String(result[key].orderDate).slice(0, 15);
      result[key].orderHour = String(result[key].orderHour).slice(0, 5);
    }
  }
  return result;
}

module.exports = getQueues;

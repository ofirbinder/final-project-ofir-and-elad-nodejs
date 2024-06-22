const doQuery = require("../query");

async function addQueues(params, username, phoneNumber) {
  const values = [
    params.date,
    params.hour,
    params.service,
    username,
    phoneNumber,
  ];

  const sql = `INSERT INTO Orders (orderDate, orderHour, service, emailCustomer, Phone)
VALUES (?,?,?,?,? );`;
  const result = await doQuery(sql, values);
  return result;
}

module.exports = addQueues;

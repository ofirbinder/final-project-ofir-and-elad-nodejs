const doQuery = require("../query");

async function addCustomer(params, username) {
  const values = [
    params.firstName,
    params.lastName,
    params.Phone,
    params.email,
    params.regPassword,
  ];

  const sql = `INSERT INTO Customers (firstName, lastName, Phone, email,password)
VALUES (?,?,?,?,? );`;
  const result = await doQuery(sql, values);
  return result;
}

module.exports = addCustomer;

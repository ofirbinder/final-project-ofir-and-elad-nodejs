const doQuery = require("../query");

async function getServices() {
  const sql = `SELECT * FROM Services`;
  const result = await doQuery(sql);
  return result;
}

module.exports = getServices;

const sql = require('mssql');
const DBconfig = require('../Config/dev');


const poolPromise = new sql.ConnectionPool(DBconfig.Config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5431,
  user: "postgres",
  password: "123", 
  database: "postgres"
});

pool.query('SELECT NOW()', (err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to PostgreSQL on port 5431');
  }
});

module.exports = pool;
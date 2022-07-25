const { Pool } = require("pg");
 
exports.pool = new Pool({
    user: "postgres",
    password: "Ihgdp51505150!",
    database: "MiniCapstone",
    host: "database-2.cosgu9wr5iwp.us-east-1.rds.amazonaws.com",
    port: 5432,
  });

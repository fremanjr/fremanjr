import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'stage'
});

db.connect((err) => {
  if (err) throw err;
  console.log('🛢️ MySQL Connected');
});

export default db;

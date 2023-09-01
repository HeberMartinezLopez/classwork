const express = require('express');
const path = require('path');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'root',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);

// Query database
db.query('SELECT * FROM reviews', (__err, results) => {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.get('/api/movies', (req,res) => {
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

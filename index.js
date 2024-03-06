const express = require('express');
const cors = require("cors");

const app = express();


app.use(cors());
// Define a route for the root URL
app.get('/check', (req, res) => {
  res.json('Hello, this is the backend server!');
});

// Define a route for a sample API endpoint
// app.get('/api/data', (req, res) => {
//   const data = {
//     message: 'This is some sample data from the backend server!',
//     timestamp: new Date().toISOString()
//   };
//   res.json(data);
// });

// Define the port
const port = 3001;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

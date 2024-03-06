const express = require('express');

const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, this is the backend server!');
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

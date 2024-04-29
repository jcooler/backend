const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.send('Test is working');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
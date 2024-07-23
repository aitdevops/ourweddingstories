const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Photos Data');
});

app.listen(3001, () => {
  console.log('Photos service is running on port 3001');
});

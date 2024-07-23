const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Stories Data');
});

app.listen(3003, () => {
  console.log('Stories service is running on port 3003');
});

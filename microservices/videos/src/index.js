const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Videos Data');
});

app.listen(3002, () => {
  console.log('Videos service is running on port 3002');
});

require('dotenv').config();

const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

// Homepage
app.get('/', (req, res) => {
  res.status(200).send('Hello World! on Render');
});

// Listener
app.listen(port, (err) => {
  if (err) console['log'](err);
  else console.log(`Server is running on URL: http://localhost:${port}`);
});

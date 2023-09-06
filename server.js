const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'C:\Users\chenw\wenjunchen\wenjunchen>')));

app.listen(3000, () => {
  console.log('Local server is running on port 3000!');
});

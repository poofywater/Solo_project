const express = require('express');
const app = express();

app.use('/build', express.static(path.join(__dirname, './build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, './index.html'));
  });

app.listen(3000);   

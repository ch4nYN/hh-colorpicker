const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const colorRoutes = require('./routes/colorRoutes');
app.use('/api/color', colorRoutes);

if (process.env.NODE_ENV === 'production') {
  //make sure express serves up prod assets 
  app.use(express.static('client/build'));
  //express will serve up index.html file if does not recognize
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log('server running on port...' + port);
})
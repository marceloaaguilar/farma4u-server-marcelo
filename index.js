const express = require('express');
const app     = express();
const path = require('path');
var cors      = require('cors');
app.use(cors());
app.use(express.static('public'));

const hotsiteRoute = require('./routes/Hotsite');

const router = require('./routes/Hotsite.js');
app.use('/api', router);

const db = require('./models');

const PORT = 5001;

db.sequelize.sync().then((req)=> {
    app.listen(PORT, ()=>{ 
        console.log("Server running");
    })
});

app.use('/hotsite', hotsiteRoute);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api/images/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'public', filename);

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send('Imagem não encontrada');
    }
  });
  
});





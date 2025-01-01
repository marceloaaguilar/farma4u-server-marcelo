const express = require('express');
const app     = express();
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





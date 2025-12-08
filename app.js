const express = require('express');
const cors = require("cors");
const db = require('./utils/db-connections');
const UserRoutes = require('./routes/userRoutes')


const app = express();
app.use(cors());         
app.use(express.json());

app.get('/', (req, res) => {
  res.send('server is created');
});

app.use('/user',UserRoutes)

db.sync({force:true})
  .then(() => {
    app.listen(3000, () => {
      console.log('server is running');
    });
  })
  .catch((err) => {
    console.log(err);
  });

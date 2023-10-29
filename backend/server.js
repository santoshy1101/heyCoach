// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./sequelize');
const Restaurant = require('./models/restaurant');
const restaurantRoute = require("./routes/restaurant.routes")

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(restaurantRoute)
app.get("/",(req,res)=>{
    res.send({message:"Welcome to our API"})
})

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});

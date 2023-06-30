const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const movieRoute = require("./routes/movies");

// SET UP
const app = express();
// const PORT = 8080;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb"}));
app.use(morgan("common"));

dotenv.config();

// Connect to mongoDB;
mongoose.connect('mongodb+srv://mymovies:hoangtrung9@movie-api.ywtwjwa.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true,})
mongoose.connection.once('open', function(){
    console.log('Conection has been made!');
  }).on('error', function(error){
      console.log('Error is: ', error);
  }); 

// ROUTES
app.use('/v1/movies', movieRoute);

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port....`)
})
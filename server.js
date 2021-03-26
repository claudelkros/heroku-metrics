const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

app.use(express.static("./public"));
app.use(cors());
app.use(express.json());

// const uri = process.env.MONGO_URI_PROD;
// const uri_PROD = "mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/mern-project?authSource=admin"
// const connect = "mongodb://admin:admin@mongo:27017/docker-app";

// mongoose.connect(connect, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// 	useFindAndModify: false,
// 	useCreateIndex: true,
// });
// const connection = mongoose.connection;
// connection.once("open", () => {
// 	console.log("MongoDB database connection established successfully");
// });



const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
  } = process.env;

  const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
  };

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(process.env.MONGO_HEROKU, options).then( function() {
    console.log('MongoDB is connected');
  })
    .catch( function(err) {
    console.log(err);
  });



const userRouter = require("./routes/users/users");
const stationRouter = require("./routes/stations/stations");

app.use("/authentication", userRouter);
app.use("/stations", stationRouter);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

app.listen(PORT, function () {
	console.log("Server is running on Port: " + PORT);
});

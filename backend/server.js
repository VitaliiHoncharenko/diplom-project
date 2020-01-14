const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

//app.use(cors());
app.use(express.json());

app.get('/', function(request, response){
  // response.sendFile('dist/index.html', { root: __dirname });
  response.sendFile(__dirname + '/dist/index.html');
});

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
  });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


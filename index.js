var express = require('express');
var cors = require('cors');
require('dotenv').config()
var app = express();
const mongoose = require('mongoose')
const multer = require("multer");

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
mongoose.connect(process.env.MONGO_URI)
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});
const Schema = mongoose.Schema

const storage = multer.memoryStorage()
const upload = multer({storage})
const fileSchema = new Schema({
  name: String,
  type: String,
  size: Number
})

const File = mongoose.model("File", userSchema)

app.post('/api/fileanalyse', async (req,res) => {

})




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

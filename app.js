const express = require('express');
const ejs = require('ejs');

const app = express();
const path = require('path');

const mongoose=require("mongoose");
const Photo=require("./models/Photo");



// Connect DB
mongoose.connect('mongodb://localhost/pcat-database')

// Template engine
app.set("view engine", "ejs")

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json())

// Routes
app.get('/', async (req, res) => {
  const photos=await Photo.find({})


  res.render('index', {
    photos
  });
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'))
});

app.get('/photos/:id', async (req, res) => {

  const photo=await Photo.findById(req.params.id);
  res.render('photo', {
    photo
  });

  // console.log(req.params.id);
  // res.render('photos');
});

app.get('/about', (req, res) => {
  res.render('about');
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'))
});

app.get('/add-photo', (req, res) => {
  res.render('add-photo');
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'))
});


app.post('/photos', async (req, res) => {
  await Photo.create(req.body)
  res.redirect('/')
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server ${port} nömrəli portda çalışır`);
});

const express = require('express');
const ejs = require('ejs');

const app = express();
const path = require('path');

// Template engine
app.set("view engine", "ejs")

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.render('index');
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'))
});

app.get('/about', (req, res) => {
  res.render('about');
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'))
});

app.get('/add-photo', (req, res) => {
  res.render('add-photo');
  // res.sendFile(path.resolve(__dirname, 'temp/index.html'))
});


app.post('/photos', (req, res) => {
  console.log(req.body);
  res.redirect('/')
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server ${port} nömrəli portda çalışır`);
});

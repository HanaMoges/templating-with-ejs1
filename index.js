const express = require('express');
const app = express();
const port = 3000;

app.set(`view engine`, `ejs`);
app.use(express.static(__dirname));


var data = require('./data/test.json');

app.get('/', (req, res) => {
  var title = "Home Page";
  res.render('pages/index', { 'title': title });
});

// app.get('/about', (req, res) => {
//   var title = "About Page";
//   res.render('pages/about', { 'title': title });
// });

app.get('/kali', (req, res) => {
  var title = "Indian Goddess Kali";
  res.render('pages/kali', { 'title': title });
});

app.get('/volcarona', (req, res) => {
  var title = "Pokemon: Volcarona";
  res.render('pages/volcarona', { 'title': title });
});

app.get('/yukari', (req, res) => {
  var title = "Yukari the Youkai";
  res.render('pages/yukari', { 'title': title });
});

app.get('/users', function(req, res) {
  var title = 'Users Page';
  res.render('users/index', {
    title: title,
    users: data
  });
});

app.get('/users/view/:id', function(req, res) {
  var title = 'User Page';
  var id = req.params.id;
  res.render('users/view', {
    title: title,
    user: data[--id]
  });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});
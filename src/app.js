const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

const usersDB = [];
const vendorsDB = [];

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/user_registration', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/user_registration.html'));
});

app.get('/vendor_registration', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/vendor_registration.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/login.html'));
});

app.post('/user_register', (req, res) => {
  const newUser = req.body;
  usersDB.push(newUser);
  console.log('User registered:', newUser);
  res.redirect('/');
});

app.post('/vendor_register', (req, res) => {
  const newVendor = req.body;
  vendorsDB.push(newVendor);
  console.log('Vendor registered:', newVendor);
  res.redirect('/');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.send(`Logged in as ${email}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

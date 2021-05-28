const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const e = require('express');
const { body } = require('express-validator');




var users = [
    {
        name: 'nick',
        email: 'nickzaza@gmail.com',
        password: '1234'
    },
    {
        name: 'nini',
        email: 'nini@gmail.com',
        password: '1234'
    },
    {
        name: 'mimi',
        email: 'mimi@gmail.com',
        password: '1234'
    },
]

const ports = process.env.PORT || 5000;

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded);
//app.use(bodyParser.text);

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//         'Access-Control-Allow-Methods',
//         'GET, POST, PUT, DELETE, OPTIONS'
//     );
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'Content-Type, Accept, X-Custom-Header, Authorization'
//     );
//     if (req.method === 'OPTIONS') {
//         return res.status(200).end();
//     }
//     next();
// });

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
    //res.sendFile(path.join(__dirname + "./index.html"));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + "/login.html"));
});

app.get('/home', function (req, res) {
    if (req.session.loggedin) {
        res.send('<h1 style="font-size: 60; display: flex; justify-content: center; align-items: center;">Welcome back, ' + req.session.username + '! </h1> <a href="/logout">click here logout</a>');
    } else {
        res.send('<h1 style="font-size: 60; display: flex; justify-content: center; align-items: center;">Please login to view this page!</h1> <a href="/login">click here login</a>');
    }
    res.end();
});

app.get('/logout', (req, res) => {
    req.session.loggedin = false;
    res.redirect('/login')
});

app.post('/auth', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
        if (username == "admin" || password == "admin") {
            req.session.loggedin = true;
            req.session.username = username;
            res.redirect('/home');
        } else {
            res.send('Incorrect Username and/or Password!');
        }
        res.end();
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
});


//get use query
app.get('/api/getdata', (req, res) => {
    try {
        //data.value = req.query;
        res.send(users);

    } catch (err) {
        res.statusCode(500).send(err.toString());
    }
});

//post use body
app.post('/api/postdata', (req, res) => {
    var data = [];
    data.push(req.body);
    res.send(data);
});

app.post('/api/login', (req, res) => {
    if (users.username === req.body.username && users.password === req.body.password) {
        console.log("pass")
        var data = users.find(e => users.username === req.body.username);
        console.log(`value is ${data}`)
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ username: 'data.username' }, {email: 's'}));
    } else {
        console.log("no")
        res.send('no')
    }


})

app.post('/api/register', (req, res) => {
    users.push(req.body);
    res.send(req.body);
    console.log(users)
});

app.post('/api/filter', (req, res) => {
    var data = users.filter(e => e.username === `a`); //ดึงเป็น object
    var data1 = users.filter[0](e => e.username === `a`);
    var data2 = users.find(e => e.username === req.username); //ดึงเป็น any 
    var data3 = users.findIndex[0](e => e.username === req.username && e.password === req.password);
    res.send(req.body);
});

app.listen(ports, () => {
    console.log(`Server start on port : ${ports}`);
});
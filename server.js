const express = require('express');
const app = express()
const path = require('path')
const bodyParser = require('body-parser') 
const session = require('express-session')
const {v4:uuidv4} = require('uuid') 
const PORT = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    'secret':uuidv4(),
    "resave":false,
    "saveUninitialized":true
}));
app.use('/static', express.static(path.join(__dirname,'public')));

//route
 const loginRoute = require('./route');
app.use('/', loginRoute);


app.get('/', (req, res) => {
    
     res.render('base', {
         title:"Login System with session cookies"
     })
});



 app.listen(PORT);
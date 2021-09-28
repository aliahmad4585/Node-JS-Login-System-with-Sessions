const express = require('express');

const loginRouter = express.Router()

let credentials = {
    email: "ali@gmail.com",
    pwd: "123"
}

loginRouter.post('/login', (req, res) => {

    if (req.body.email == credentials.email && req.body.pwd == credentials.pwd) {
        req.session.user = req.body.email
       res.redirect('dashboard')
    }
    else {
        res.end("invalid credentials")
    }
});

loginRouter.get('/dashboard', (req, res) => {

     if(req.session.user){
          res.render('dashboard');
     }else{
          res.redirect('/');
     }
})

loginRouter.get('/logout', (req, res) => {
    
         req.session.destroy();

          res.redirect('/');
         
    })

module.exports = loginRouter;
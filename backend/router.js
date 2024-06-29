const express = require('express')
const mongoose = require('mongoose')
const passport = require("./passport.js")


const router = express.Router()


router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}))
router.get("/login", (req, res,next) =>{
    res.send("Login")
})
router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
})

// Checking user middleware
const checkUser = (req, res, next)=>{
    if(req.user) {
        next()
    }else{
        res.redirect('/login')
    }
}
router.get("/", checkUser, (req, res, nex) =>{
    res.send(req.user)
})

router.post('/signup', async function(req, res, next) {
    try {
        // Insert user to the db
        console.log(req.body);
        const user = await UserModel.create({"username":req.body.username, "password": req.body.passport})
        req.login(user, function(err) {
            if (err) {
                console.log("Something went wrong"); 
                res.redirect("/login")
            }
            res.redirect('/');
        })
    } catch (error) {
        console.log(error)
    }
    
})

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/login');
    });
})

module.exports = router
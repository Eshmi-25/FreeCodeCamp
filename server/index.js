const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const logindataModel = require('./models/logindata')
const dotenv = require('dotenv');
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./models/userSchema");

const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()

const clientid = process.env.CLIENTID
const clientsecret = process.env.CLIENTSECRET


app.use(cors({
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));

mongoose.connect("mongodb://127.0.0.1:27017/logindata",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  
const User = mongoose.model('User', userSchema);

app.use(express.json());


app.post('/loginpage', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Email received:", email);
        const user = await logindataModel.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                res.json("Success");
                res.redirect('/dashboard');
            } else {
                res.json("The email or password is incorrect");
            }
        } else {
            res.json("Email is not registered");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error");
    }
})
     
//SIGNIN
// POST route for user registration
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Check if the email already exists in the database
    logindataModel.findOne({ email: email })
        .then(user => {
            if (user) {
                alert("Email already registered")
                
            } else {
                // If the email doesn't exist, create a new user
                return logindataModel.create({ name, email, password });
            }
        })
        .then(newUser => {
            // If the user is successfully created, return a success response
            res.json(newUser);
        })
        .catch(err => {
            alert("Email already registered or wrong data");
            console.error(err);
            
            res.status(500).json({ error: 'Internal server error' });
        });
});

// setup session
app.use(session({
    secret:"1234",
    resave:false,
    saveUninitialized:true
}))

// setuppassport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strategy({
        clientID:clientid,
        clientSecret:clientsecret,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        try {
            let user = await userdb.findOne({googleId:profile.id});

            if(!user){
                user = new userdb({
                    googleId:profile.id,
                    displayName:profile.displayName,
                    email:profile.emails[0].value,
                    image:profile.photos[0].value
                });

                await user.save();
            }

            return done(null,user)
        } catch (error) {
            return done(error,null)
        }
    }
    )
)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
});

// initial google ouath login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:5173/dashboard",
    failureRedirect:"http://localhost:5173/"
}))

app.listen(3001,()=>{
    console.log("server is running")
})
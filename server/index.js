import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import env from "dotenv";
import pg from "pg";
import passport from "passport";
import session from "express-session";
import { Strategy } from "passport-local"; //authenticate username & password
// import GoogleStrategy from "passport-google-oauth2"
import bcrypt, { hash } from "bcrypt"
// import cors from "cors"; //allows React to send requests to this file

const port = 3000; 
const app = express();
env.config();
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true //needed for cookies and sessions
// }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 1 //1 minutes
      }
    })
  );
app.use(passport.initialize());
app.use(passport.session());
// const db = new pg.Client({
//     user: process.env.PG_USER,
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE,
//     password: process.env.PG_PASSWORD,
//     port: process.env.PG_PORT,
//   });
// db.connect();

//starting the server
app.listen(port, ()=>{
    console.log(`Server has started on port ${port}`);
});
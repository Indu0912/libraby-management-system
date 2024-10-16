const mongoose = require('mongoose');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const mongoURI = process.env.MONGO_URI;
const jwtSecret = process.env.JWT_SECRET;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use jwtSecret for signing tokens
const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
const MONGO_URI="mongodb://127.0.0.1:27017/library-management-system";
const express=require("expess");
const jwt= require("jsonwebtoken");
const app=express();
const port=3000;
const SECRET_KEY="your_secret_key";
main()
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
   console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
  }
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(MongoDB connectDB: ${conn.connection.host});
    } catch (error) {
        console.error(Error: ${error.message});
        process.exit(1);
    }
};

module.exports = connectDB;
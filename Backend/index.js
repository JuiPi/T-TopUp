const express = require('express');
const app = express()

const cors = require('cors');
const mysql = require('mysql2');

const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

var connection = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USERNAME,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE,
});

connection.connect(function(err){
    if(err) throw err;
    console.log(`Connection DB: ${process.env.MYSQL_DATABASE}`)
})

app.get('/gamedatabase',(req,res)=>{
    let sql = `select * from game`;
    connection.query(sql,(error, results)=>{
        if(error) {throw error

        }else{
            console.log(`${results.length} rows returned Founded`)
            return res.send(results);
        }
    })
})


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

app.get('/admindatabase',(req,res)=>{
    connection.query(`select * from admin`,(error, results)=>{
        if(error) {throw error

        }else{
            console.log(`${results.length} rows returned Founded`)
            return res.send(results);
        }
    })
})

app.get('/game/:name',(req,res)=>{
    game_name = req.params.name;
    
    if (!game_name) {
        return res.status(400).send({ error: true, message: 'Please provide student id.' });
    }
    connection.query('SELECT * FROM game where gname=?', game_name, function (error, results) {
    if (error) throw error;
        return res.send(results);
    });
})

app.get('/package/:name',(req,res)=>{
    game_name = req.params.name;
    
    if (!game_name) {
        return res.status(400).send({ error: true, message: 'Please provide student id.' });
    }
    connection.query('SELECT * FROM package where gname=?', game_name, function (error, results) {
    if (error) throw error;
        return res.send(results);
    });
})


app.post('/admin',(req,res)=>{
    let admin = req.body;
    console.log(admin);
    if (!admin) {
        return res.status(400).send({ error: true, message: 'Please provide Admin information' });
    }
    connection.query("INSERT INTO `admin` SET ? ", admin, function (error, results) {
    if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'New Admin has been created successfully.'});
    });
});

app.delete('/admin/:username',(req,res)=>{
    let admin_username = req.params.username;
    console.log(admin_username)
    if (!admin_username) {
        return res.status(400).send({ error: true, message: 'Please provide admin username' });
    }
     // Perform deletion from multiple tables
     connection.query('DELETE FROM manage_game WHERE username = ?', [admin_username], function (error, results) {
        if (error) {
            return res.status(500).send({ error: true, message: 'Error deleting from manage_game table' });
        }

        connection.query('DELETE FROM manage_admin WHERE manager_username = ?', [admin_username], function (error, results) {
            if (error) {
                return res.status(500).send({ error: true, message: 'Error deleting from manage_admin table' });
            }

            connection.query('DELETE FROM login WHERE username = ?', [admin_username], function (error, results) {
                if (error) {
                    return res.status(500).send({ error: true, message: 'Error deleting from login table' });
                }

                // Finally, delete admin from 'admin' table
                connection.query('DELETE FROM `admin` WHERE username = ?', [admin_username], function (error, results) {
                    if (error) {
                        return res.status(500).send({ error: true, message: 'Error deleting from admin table' });
                    }

                    // Handle successful deletion from all tables
                    return res.send({ error: false, data: results.affectedRows, message: `${admin_username} has been deleted successfully.` });
                });
            });
        });
    });
})


app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port: ${process.env.PORT}`)
})


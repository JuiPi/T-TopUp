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

app.get('/admin/:name',(req,res)=>{
    username = req.params.name;
    
    if (!username) {
        return res.status(400).send({ error: true, message: 'Please provide student id.' });
    }
    connection.query('SELECT * FROM admin where username=?', username, function (error, results) {
    if (error) throw error;
        return res.send(results);
    });
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

app.put('/edit-admin/:username', function (req, res) {
    let username = req.params.username;
    let admin = req.body;
    if (!admin) {
        return res.status(400).send({ error: student, message: 'Please provide admin information' });
    }
    connection.query("UPDATE admin SET ? WHERE username = ?", [admin, username], function (error,
    results) {
    if (error) throw error;
        return res.send({error: false, data: results.affectedRows, message: 'Admin has been updated successfully.'})
    });
});

app.delete('/admin/:username',async (req,res)=>{
    let admin_username = req.params.username;
    console.log(admin_username)

    if (!admin_username) {
        return res.status(400).send({ error: true, message: 'Please provide admin username' });
    }
    connection.beginTransaction((err) => {
        if (err) {
            console.error("Error beginning transaction:", err);
            return res.status(500).send("Error beginning transaction");
        }

        connection.query('DELETE FROM manage_game WHERE username = ?', [admin_username], (error1, results1) => {
            if (error1) {
                connection.rollback(() => {
                    console.error("Error deleting from manage_game:", error1);
                    res.status(500).send("Error deleting from manage_game");
                });
            }

            connection.query('DELETE FROM login WHERE username = ?', [admin_username], (error2, results2) => {
                if (error2) {
                    connection.rollback(() => {
                        console.error("Error deleting from login:", error2);
                        res.status(500).send("Error deleting from login");
                    });
                }

                connection.query('DELETE FROM `admin` WHERE username = ?', [admin_username], (error3, results3) => {
                    if (error3) {
                        connection.rollback(() => {
                            console.error("Error deleting from admin:", error3);
                            res.status(500).send("Error deleting from admin");
                        });
                    }

                    connection.commit((err) => {
                        if (err) {
                            connection.rollback(() => {
                                console.error("Error committing transaction:", err);
                                res.status(500).send("Error committing transaction");
                            });
                        }

                        console.log("User deleted successfully from all tables");
                        res.status(200).send("User deleted successfully from all tables");
                    });
                });
            });
        });
    });
            
})

app.get('/search/:query',(req,res)=>{
    squery = req.params.query;
    connection.query(`select * from game where gname like "%${squery}%";`, squery, function (error, results) {
        if (error) throw error;
            return res.send(results);
        });
})

app.post('/log-in', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    connection.query("SELECT * FROM login WHERE username = ? and password = ?",[username,password], function(error,results){
        if(error){
            throw error
        }
        if(results.length > 0){
            console.log("Correct");
            res.status(200).send("Login Successful");
        } else {
            res.status(500).send("Username or Password is incorrect");
        }
    })

})


app.listen(process.env.PORT,()=>{
    console.log(`Server listening on port: ${process.env.PORT}`)
})


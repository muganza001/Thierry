
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'barkery'
})
app.get('/', (req, res) =>{
    const sql = "SELECT * FROM user";
    db.query(sql, (err, result) => {
        if(err) return res.json({message:"Error inside server"});
        return res.json(result);
    })

})

app.post('/user', (req, res) => {
    const sql = "INSERT INTO user (`Name`, `Email`) VALUES (?)";
    const Values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [Values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.listen(8081, () => {
    console.log("listening");
})
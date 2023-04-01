const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const bodyparser = require('body-parser')

const { loggerAPI } = require('./logger/logger')


app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(loggerAPI)
app.use(cors());
// app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'borrow2022'
})

app.get('/table_name', (req, res) => {
    db.query("SELECT * FROM table_name", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put('/table_name/:id', (req, res) => {
    console.log('put emy', req.body)
    // console.log(req.body)
    const id = req.params.id;
    console.log('id', id)
    const NameTH = req.body.NameTH
    console.log('NameTH', NameTH)
    const name = req.body.name
    console.log('name', name)
    const IDEmployee = req.body.IDEmployee
    console.log('idemy', IDEmployee)
    const department = req.body.department
    console.log('department', department)
    const location = req.body.location
    console.log('location', location)
    const StatusEmployee = req.body.StatusEmployee
    console.log('StatusEmployee', StatusEmployee)
    const query = `UPDATE table_name SET name = '${name}', IDEmployee = '${IDEmployee}', department ='${department}',  location ='${location}',   StatusEmployee ='${StatusEmployee}' WHERE id = '${id}'`;

    db.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send('Data updated successfully!');
    });
});


app.post('/create', (req, res) => {
    const name = req.body.name;
    const IDEmployee = req.body.IDEmployee;
    const department = req.body.department;
    const location = req.body.location;
    const StatusEmployee = req.body.StatusEmployee;

    db.query("INSERT INTO table_name (name, IDEmployee,department,location,StatusEmployee) VALUES(?,?,?,?,?)", [name, IDEmployee, department, location, StatusEmployee],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted")
            }
        }
    );
})



app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    db.query("DELETE FROM table_name WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
})

app.listen('3001', () => {
    console.log('Server is running on port 3001')
})
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

// ********************* show table_name **************************
app.get('/table_name', (req, res) => {
    db.query("SELECT * FROM table_name", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// ******************** update id table_name **********************
app.put('/table_name/:id', (req, res) => {
    console.log('put emy', req.body)
    // console.log(req.body)
    const id = req.params.id;
    console.log('id', id)
    const NameTH = req.body.NameTH
    console.log('NameTH', NameTH)
    const SurnameTH = req.body.SurnameTH
    console.log('SurnameTH', SurnameTH)
    const Emp_Code = req.body.Emp_Code
    console.log('Emp_Code', Emp_Code)
    const Nickname = req.body.Nickname
    console.log('Nickname', Nickname)
    const Department = req.body.Department
    console.log('Department', Department)
    const Branch = req.body.Branch
    console.log('Branch', Branch)
    const Status = req.body.Status
    console.log('Status', Status)
    const query = `UPDATE table_name SET NameTH = '${NameTH}',SurnameTH = '${SurnameTH}', Emp_Code = '${Emp_Code}',Nickname = '${Nickname}', Department ='${Department}',  Branch ='${Branch}',   Status ='${Status}' WHERE id = '${id}'`;

    db.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send('Data updated successfully!');
    });
});

// ******************** add id table_name *************************
app.post('/create', (req, res) => {
    const NameTH = req.body.NameTH;
    const SurnameTH = req.body.SurnameTH;
    const Emp_Code = req.body.Emp_Code;
    const Nickname = req.body.Nickname;
    const Department = req.body.Department;
    const Branch = req.body.Branch;
    const Status = req.body.Status;

    db.query("INSERT INTO table_name (NameTH,SurnameTH, Emp_Code,Nickname,Department,Branch,Status) VALUES(?,?,?,?,?,?,?)", [NameTH, SurnameTH, Emp_Code, Nickname, Department, Branch, Status],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted")
            }
        }
    );
})


// ********************* delete id table_name *********************
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

// define the API endpoint ***************************************
app.get('/table_name/count', (req, res) => {

    // execute the query
    db.query(`SELECT COUNT(id) AS count FROM table_name`, (error, results) => {
        if (error) {
            res.status(500).send(error.message);
        } else {
            res.send(results[0].count.toString());
            // console.log('xxxxx', results[0].count.toString())
        }
    });
});




//   ************ run port server *****************************
app.listen('3001', () => {
    console.log('Server is running on port 3001')
})


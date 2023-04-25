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


app.get('/table_device', (req, res) => {
    db.query("SELECT * FROM table_device", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get('/table_brand', (req, res) => {
    db.query("SELECT * FROM table_brand", (err, result) => {
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
    const query = `UPDATE table_name SET NameTH = '${NameTH}', Emp_Code = '${Emp_Code}', Department ='${Department}', SurnameTH = '${SurnameTH}',Nickname = '${Nickname}', Branch ='${Branch}',  Status ='${Status}' WHERE id = '${id}'`;

    db.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send('Data updated successfully!');
    });
});


app.post('/create_device', (req, res) => {
    const Name = req.body.Name;
    const ID = req.body.ID;
    const SN_Code = req.body.SN_Code;
    const Brand = req.body.Brand;
    const Start_Date = req.body.Start_Date;
    const End_Date = req.body.End_Date;
    const Status = req.body.Status;
    const Detail = req.body.Detail;

    db.query("INSERT INTO table_device (Name, ID, SN_Code, Brand, Start_Date, End_Date, Status, Detail) VALUES(?,?,?,?,?,?,?,?)", [Name, ID, SN_Code, Brand, Start_Date, End_Date, Status, Detail],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted")
            }
        }
    );
})

app.post('/create', (req, res) => {
    const NameTH = req.body.NameTH;
    const Emp_Code = req.body.Emp_Code;
    const SurnameTH = req.body.SurnameTH;
    const Nickname = req.body.Nickname;
    const Department = req.body.Department;
    const Branch = req.body.Branch;
    const Status = req.body.Status;
    const Create_Date = req.body.Create_Date;

    db.query("INSERT INTO table_name (NameTH, Emp_Code,SurnameTH,Nickname,Department,Branch,Status,Create_Date) VALUES(?,?,?,?,?,?,?,?)", [NameTH, Emp_Code, SurnameTH, Nickname, Department, Branch, Status,Create_Date],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted")
            }
        }
    );
})
// POST Brand
app.post('/create_brand', (req, res) => {
    const ID = req.body.ID;
    const name = req.body.name;

    db.query("INSERT INTO table_brand (ID, Brand) VALUES(?,?)", [ID,name],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values inserted")
        }
    })
})

app.put('/table_brand/:ID', (req, res) => {
    console.log('put brand', req.body)
    // console.log(req.body)
    const ID = req.params.ID;
    console.log('id', ID)
    const Brand = req.body.Brand
        const query = `UPDATE table_brand SET Brand = '${Brand}'`;

    db.query(query, function (error, results, fields) {
        if (error) throw error;
        res.send('Data updated successfully!');
    });
});


app.delete('/delete_brand/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    db.query("DELETE FROM table_brand WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    })
})

// End Brand



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
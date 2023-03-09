const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'borrow2022'
})

app.get('/employee', (req, res) => {
    db.query("SELECT * FROM employee", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employee.find(e => e.id === id);
    res.json(employee);
  });

app.post('/create', (req, res) => {
    const name = req.body.name;
    const IDEmployee = req.body.IDEmployee;
    const department = req.body.department;
    const location = req.body.location;
    const StatusEmployee = req.body.StatusEmployee;

    db.query("INSERT INTO employee (name, IDEmployee,department,location,StatusEmployee) VALUES(?,?,?,?,?)", [name, IDEmployee, department, location, StatusEmployee],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted")
            }
        }
    );
})

app.put('/employee', function (req, res, next) {
    connection.query(
        'UPDATE `employee` SET `name`= ?, `IDEmployee`= ?, `department`= ?, `department`= ?, `location`= ?, `StatusEmployee` = ? WHERE id = ?',
        [req.body.name, req.body.IDEmployee, req.body.department, req.body.department, req.body.location, req.body.StatusEmployee],
        function (err, results) {
            res.json(results);
        }
    );
})


app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    db.query("DELETE FROM employee WHERE id = ?", id, (err, result) => {
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
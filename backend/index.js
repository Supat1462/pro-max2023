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

// GET EMPLOYEE ************************************************************
app.get('/table_name', (req, res) => {
    db.query("SELECT * FROM table_name", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// GET DEVICE ************************************************************
app.get('/table_device', (req, res) => {
    db.query("SELECT * FROM table_device", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// GET BRAND ************************************************************
app.get('/table_brand', (req, res) => {
    db.query("SELECT * FROM table_brand", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// GET CATEGORY ************************************************************
app.get('/table_category', (req, res) => {
    db.query("SELECT * FROM table_category", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// GET DEVICE STATUS ************************************************************
app.get('/table_device_status', (req, res) => {
    db.query("SELECT * FROM table_device_status", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// GET DEPARTMENT ************************************************************
app.get('/table_department', (req, res) => {
    db.query("SELECT * FROM table_department", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// GET Branch ************************************************************
app.get('/table_branch', (req, res) => {
    db.query("SELECT * FROM table_branch", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

// PUT EMPLOYEE ************************************************************
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

// POST DEVICE ************************************************************
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

// POST EMPLOYEE ************************************************************
app.post('/create', (req, res) => {
    const NameTH = req.body.NameTH;
    const Emp_Code = req.body.Emp_Code;
    const SurnameTH = req.body.SurnameTH;
    const Nickname = req.body.Nickname;
    const Department = req.body.Department;
    const Branch = req.body.Branch;
    const Status = req.body.Status;
    const Create_Date = req.body.Create_Date;

    db.query("INSERT INTO table_name (NameTH, Emp_Code,SurnameTH,Nickname,Department,Branch,Status,Create_Date) VALUES(?,?,?,?,?,?,?,?)", [NameTH, Emp_Code, SurnameTH, Nickname, Department, Branch, Status, Create_Date],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted")
            }
        }
    );
})
// POST BRAND ************************************************************
app.post('/create_brand', (req, res) => {
    const ID = req.body.ID;
    const Brand = req.body.Brand;

    db.query("INSERT INTO table_brand (ID, Brand) VALUES(?,?)", [ID, Brand],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted")
            }
        })
})

// POST CATEGORY ************************************************************
app.post('/create_category', (req, res) => {
    const ID = req.body.ID;
    const nameCategory = req.body.nameCategory;

    db.query("INSERT INTO table_category (ID, nameCategory) VALUES(?,?)", [ID, nameCategory],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted")
            }
        })
})

// POST DEVICE STATUS ************************************************************
app.post('/create_device_status', (req, res) => {
    const ID = req.body.ID;
    const Device_Status = req.body.Device_Status;

    db.query("INSERT INTO table_device_status (ID, Device_Status) VALUES(?,?)", [ID, Device_Status],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted")
            }
        })
})

// POST DEPARTMENT ************************************************************
app.post('/create_department', (req, res) => {
    const id = req.body.id;
    const nameDepartment = req.body.nameDepartment;

    db.query("INSERT INTO table_department (id, nameDepartment) VALUES(?,?)", [id, nameDepartment],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted")
            }
        })
})

// POST Branch ************************************************************
app.post('/create_branch', (req, res) => {
    const id = req.body.id;
    const nameBranch = req.body.nameBranch;

    db.query("INSERT INTO table_branch (id, nameBranch) VALUES(?,?)", [id, nameBranch],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values inserted")
            }
        })
})

// PUT DEVICE STATUS ************************************************************
app.put('/brandupdate', (req, res) => {
    const ID = req.body.ID;
    const Device_Status = req.body.Device_Status;
    db.query("UPDATE table_device_status SET Device_Status = ? WHERE ID = ?", [Device_Status, ID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

// PUT CATEGORY ************************************************************
app.put('/categoryupdate', (req, res) => {
    const ID = req.body.ID;
    const nameCategory = req.body.nameCategory;
    db.query("UPDATE table_category SET nameCategory = ? WHERE ID = ?", [nameCategory, ID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

// PUT DEVICE STATUS ************************************************************
app.put('/statusupdate', (req, res) => {
    const ID = req.body.ID;
    const Device_Status = req.body.Device_Status;
    db.query("UPDATE table_device_status SET Device_Status = ? WHERE ID = ?", [Device_Status, ID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

// PUT DEPARTMENT ************************************************************
app.put('/departmentupdate', (req, res) => {
    const id = req.body.id;
    const nameDepartment = req.body.nameDepartment;
    db.query("UPDATE table_department SET nameDepartment = ? WHERE id = ?", [nameDepartment, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

// PUT Branch ************************************************************
app.put('/branchupdate', (req, res) => {
    const id = req.body.id;
    const nameBranch = req.body.nameBranch;
    db.query("UPDATE table_branch SET nameBranch = ? WHERE id = ?", [nameBranch, id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

// DELETE EMPLOYEE ************************************************************
app.delete('/deletebrand/:ID', (req, res) => {
    const ID = req.params.ID;
    console.log(ID);
    db.query("DELETE FROM table_brand WHERE ID = ?", ID, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error deleting brand');
        } else {
            console.log('Brand deleted successfully');
            res.send('Brand deleted successfully');
        }
    });
});

// DELETE CATEGORY ************************************************************
app.delete('/deletecategory/:ID', (req, res) => {
    const ID = req.params.ID;
    console.log(ID);
    db.query("DELETE FROM table_category WHERE ID = ?", ID, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error deleting category');
        } else {
            console.log('Category deleted successfully');
            res.send('Category deleted successfully');
        }
    });
});

// DELETE DEVICE STATUS ************************************************************
app.delete('/deletedevicestatus/:ID', (req, res) => {
    const ID = req.params.ID;
    console.log(ID);
    db.query("DELETE FROM table_device_status WHERE ID = ?", ID, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error deleting devicestatus');
        } else {
            console.log('Device Status deleted successfully');
            res.send('Device Status deleted successfully');
        }
    });
});

// DELETE DEPARTMENT ************************************************************
app.delete('/deletedepartment/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    db.query("DELETE FROM table_department WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error deleting devicestatus');
        } else {
            console.log('Device Status deleted successfully');
            res.send('Device Status deleted successfully');
        }
    });
});

// DELETE Branch ************************************************************
app.delete('/deletebranch/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    db.query("DELETE FROM table_branch WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error deleting devicestatus');
        } else {
            console.log('Device Status deleted successfully');
            res.send('Device Status deleted successfully');
        }
    });
});


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
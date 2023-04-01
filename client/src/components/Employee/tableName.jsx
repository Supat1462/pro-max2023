import React, { useState, useEffect } from "react";
import axios from "axios";
// import EditButton from './editButton';
// import EditForm from './editFrom';
// import ViewButton from './ViewButton';
// import ViewFrom from './ViewFrom';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const TableName = () => {
    // Array
    const [data, setData] = useState([]);
    const [count, setCount] = useState('');

    // ********************* start button **************************** //
    const [showModal, setShowModal] = useState(false);
    const [ViewModal, setViewModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    // ******************** end button ***************************** //


    // table
    useEffect(() => {
        axios.get("http://localhost:3001/table_name")
            .then((response) => {
                const employee = response.data
                employee.sort((a, b) => a.Emp_Code - b.Emp_Code);
                // console.log('HHHHH', employee)
                setData(employee);
            });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:3001/table_name/count")
            .then((response) => {
                setCount(response.data)
            });
    }, []);


    // delete button
    const deleteData = (id) => {
        // console.log(id);
        axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            setData(
                data.filter((item) => {
                    return item.id !== id;
                })
            )
        })
        // alert('ลบข้อมูลพนักงานเรียบร้อยแล้ว');
    }


    // const handleEditClick = (employee) => {
    //     setSelectedEmployee(employee);
    //     setShowModal(true);
    // }

    // const handleViewClick = (employee) => {
    //     setSelectedEmployee(employee);
    //     setViewModal(true);
    // }

    // const handleModalClose = () => {
    //     setShowModal(false);
    // }

    // const handleViewModalClose = () => {
    //     setViewModal(false);
    // }


    // ******************* button *****************************
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-3" severity="success" onClick={() => deleteData(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => deleteData(rowData)} />
            </React.Fragment>
        );
    };

    // ******************** Status *****************************
    const statusBodyTemplate = (data) => {
        return <Tag value={data.Status} severity={getSeverity(data)}></Tag>;
    };

    const getSeverity = (data) => {
        switch (data.Status) {
            case 'Active':
                return 'success';

            case 'Inactive':
                return 'warning';

            case 'On Leave':
                return 'danger';

            default:
                return null;
        }
    };

    return (
        <div className="">
            <p className="mt-5 text-indigo-700 font-medium">ข้อมูลพนักงานจำนวน {count}  รายการ</p>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
                <DataTable value={data}
                    showGridlines
                    stripedRows
                    paginator rows={10} rowsPerPageOptions={[10, 25, 50]}
                    style={{fontSize: '13px', backgroundColor: 'var(--primary-color)'}}>
                    <Column field="id" header="ลำดับ" sortable></Column>
                    <Column field="Emp_Code" header="รหัสพนักงาน" sortable></Column>
                    <Column field="NameTH" header="ชื่อจริง" sortable filterPlaceholder="Search by name"></Column>
                    <Column field="SurnameTH" header="นามสกุล" sortable></Column>
                    <Column field="Nickname" header="ชื่อเล่น" sortable></Column>
                    <Column field="Department" header="แผนก" sortable></Column>
                    <Column field="Branch" header="สาขา" sortable></Column>
                    <Column header="สถานะ" field="Status" sortable body={statusBodyTemplate}></Column>
                    <Column header="แก้ไข" body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem', textAlign: 'center' }}></Column>
                </DataTable>
            </div>

            
        </div>
    );
};

export default TableName;

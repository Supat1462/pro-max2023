import React, { useState, useEffect } from "react";
import axios from "axios";
<<<<<<< HEAD
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
=======
import EditButton from './editButton';
import EditForm from './editFrom';
import ViewButton from './ViewButton';
import ViewFrom from './ViewFrom';
>>>>>>> parent of 39c15cfb (1/4/66)

const TableName = () => {
    // Array
    const [data, setData] = useState([]);
<<<<<<< HEAD
    const [count, setCount] = useState('');
=======
>>>>>>> parent of 39c15cfb (1/4/66)

    // ********************* start button **************************** //
    const [showModal, setShowModal] = useState(false);
    const [ViewModal, setViewModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    // ******************** end button ***************************** //

<<<<<<< HEAD
=======

    const [count, setCount] = useState('');

>>>>>>> parent of 39c15cfb (1/4/66)

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
<<<<<<< HEAD
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
                <Button icon="pi pi-pencil" rounded outlined severity="success" onClick={() => editProduct(rowData)} />
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
=======
        alert('ลบข้อมูลพนักงานเรียบร้อยแล้ว');
    }


    const handleEditClick = (employee) => {
        setSelectedEmployee(employee);
        setShowModal(true);
    }

    const handleViewClick = (employee) => {
        setSelectedEmployee(employee);
        setViewModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false);
    }

    const handleViewModalClose = () => {
        setViewModal(false);
    }
>>>>>>> parent of 39c15cfb (1/4/66)

    return (
        <div className="">
            <p className="mt-5 text-indigo-700 font-medium">ข้อมูลพนักงานจำนวน {count}  รายการ</p>
<<<<<<< HEAD
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

            
=======
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                <table className="w-full text-gray-500 dark:text-gray-400">
                    <thead className="lg:text-sm sm1:text-xs text-gray-700 uppercase bg-indigo-200 text-center">
                        <tr>
                            <th scope="col" className="px-2 py-">ลำดับ</th>
                            <th scope="col" className="px-2 py-3">รหัสพนักงาน</th>
                            <th scope="col" className="px-7 py-3">ชื่อจริง</th>
                            <th scope="col" className="px-6 py-3">นามสกุล</th>
                            <th scope="col" className="px-6 py-3">ชื่อเล่น</th>
                            <th scope="col" className="px-6 py-3">สาขา</th>
                            <th scope="col" className="px-6 py-3">แผนก</th>
                            <th scope="col" className="px-6 py-3">สถานะ</th>
                            <th scope="col" className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={item.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-xs">
                                <td className="border px-4 py-2 text-center">{index + 1}</td>
                                <td className="border px-4 py-2 text-center">{item.Emp_Code}</td>
                                <td className="border px-4 py-2">{item.NameTH}</td>
                                <td className="border px-4 py-2">{item.SurnameTH}</td>
                                <td className="border px-4 py-2">{item.Nickname}</td>
                                <td className="border px-4 py-2">{item.Branch}</td>
                                <td className="border px-4 py-2">{item.Department}</td>
                                <td className="border px-4 py-2">{item.Status}</td>
                                <td className="border px-2 py-2 space-x-2 text-center md:justify-center">
                                    <ViewButton onClick={() => handleViewClick(item)} />
                                    <EditButton onClick={() => handleEditClick(item)} />
                                    <button className='bg-red-200 hover:text-red-200 border-red-200' onClick={() => { deleteData(item.id) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d0021b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {
                        showModal && (
                            <EditForm data={selectedEmployee} onClose={handleModalClose} />
                        )
                    }


                    {
                        ViewModal && (
                            <ViewFrom data={selectedEmployee} onClose={handleViewModalClose} />
                        )
                    }
                    {/* ******************* end modals ********************** */}
                </table>
            </div>
>>>>>>> parent of 39c15cfb (1/4/66)
        </div>
    );
};

export default TableName;

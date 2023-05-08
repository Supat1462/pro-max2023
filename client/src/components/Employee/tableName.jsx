import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import EditButton from './editButton';
import EditForm from './editFrom';
// import ViewButton from './ViewButton';
// import ViewFrom from './ViewFrom';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Tooltip } from 'primereact/tooltip';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const TableName = () => {
    // Array
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [count, setCount] = useState('');
    const [globalFilter, setGlobalFilter] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [employeeDialog, setEmployeeDialog] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("");
    const toast = useRef(null);
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


    const handleEditClick = (employee) => {
        setSelectedEmployee(employee);
        setShowModal(true);
    }

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

    const editProduct = (data) => {
        console.log('........', data)
        setData2({ ...data });
        setEmployeeDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setEmployeeDialog(false);
    };

    const saveEmployee = () => {
        setSubmitted(true);

        // if (data.name.trim()) {
        //     let _data = [...data];
        //     let _product = { ...product };

        //     if (data.id) {
        //         const index = findIndexById(data.id);

        //         _products[index] = _product;
        //         toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
        //     } else {
        //         _data.id = createId();
        //         _product.image = 'product-placeholder.svg';
        //         _products.push(_product);
        //         toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
        //     }

        //     setData(_data);
        //     setEmployeeDialog(false);
        //     setData(emptyProduct);
        // }
    };

    const findIndexById = (id) => {
        let index = -1;

        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const Status = [
        { name: 'Active', code: 'AT' },
        { name: 'On Leave', code: 'OL' },
    ];

    const onInputChange = (e, name) => {
        console.log(e.target.value)
        setData2(e.target.value)
        // const val = (e.target && e.target.value) || '';
        // let _data = { ...data };

        // _data[`${name}`] = val;

        // setData(_data);
    };

    const header = (
        <div className="flex flex-wrap gap-2 items-center justify-between">
            <h4 className="m-0 text-xl">Manage Employee</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const employeeDialogFooter = (
        <React.Fragment>
            <Button label="ยกเลิก" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="บันทึก" icon="pi pi-check" onClick={saveEmployee} />
        </React.Fragment>
    );

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
                    style={{ fontSize: '13px', backgroundColor: 'var(--primary-color)', fontFamily: 'K2D' }}
                    header={header}
                    globalFilter={globalFilter}
                >
                    <Column field="id" header="ลำดับ"></Column>
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

            <Dialog visible={employeeDialog} style={{ width: '32rem', fontFamily: 'K2D' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Employee Details" modal className="p-fluid" footer={employeeDialogFooter} onHide={hideDialog}>
                <div className="">
                    <div className="field pb-4">
                        <label className="font-bold pb-2">
                            รหัสพนักงาน
                        </label>
                        <InputText id="name" value={data2.Emp_Code} onChange={(e) => onInputChange(e, 'Emp_Code')} tooltip="แก้ไขรหัสพนักงาน" tooltipOptions={{ position: 'bottom' }} autoFocus className={({ 'p-invalid': submitted && !data2.Emp_Code })} />
                    </div>
                    <div className="field pb-4">
                        <label className="font-bold pb-2">
                            ชื่อจริง
                        </label>
                        <InputText id="name" value={data2.NameTH} onChange={(e) => onInputChange(e, 'NameTH')} tooltip="แก้ไขชื่อ" tooltipOptions={{ position: 'bottom' }} autoFocus className={({ 'p-invalid': submitted && !data2.NameTH })} />
                    </div>
                    <div className="field pb-4">
                        <label className="font-bold">
                            นามสกุล
                        </label>
                        <InputText id="SurnameTH" value={data2.SurnameTH} onChange={(e) => onInputChange(e, 'SurnameTH')} tooltip="แก้ไขนามสกุล" tooltipOptions={{ position: 'bottom' }} autoFocus className={({ 'p-invalid': submitted && !data2.SurnameTH })} />
                    </div>
                    <div className="field pb-4">
                        <label className="font-bold">
                            ชื่อเล่น
                        </label>
                        <InputText id="Nickname" value={data2.Nickname} onChange={(e) => onInputChange(e, 'Nickname')} tooltip="แก้ไขชื่อเล่น" tooltipOptions={{ position: 'bottom' }} autoFocus className={({ 'p-invalid': submitted && !data2.Nickname })} />
                    </div>
                    <div className="field pb-4">
                        <label className="font-bold">
                            แผนก
                        </label>
                        <InputText id="Department" value={data2.Department} onChange={(e) => onInputChange(e, 'Department')} tooltip="แก้ไขแผนก" tooltipOptions={{ position: 'bottom' }} autoFocus className={({ 'p-invalid': submitted && !data2.Department })} />
                    </div>
                    <div className="field pb-4">
                        <label className="font-bold">
                            สาขา
                        </label>
                        <InputText id="Branch" value={data2.Branch} onChange={(e) => onInputChange(e, 'Branch')} tooltip="แก้ไขสาขา" tooltipOptions={{ position: 'bottom' }} autoFocus className={({ 'p-invalid': submitted && !data2.Branch })} />
                    </div>
                    <div className="field pb-4">
                        <label className="mb-3 font-bold">สถานะ</label>
                        <div className="card flex justify-content-center">
                            <Dropdown
                                inputId="Status"
                                value={selectedStatus}
                                options={Status}
                                onChange={(e) => setSelectedStatus(e.data2.Status)}
                                optionValue="Status"
                                optionLabel="name"
                                className="w-full md:w-14rem" />
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default TableName;

import React, { useState, useEffect } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { DataTable } from 'primereact/datatable';
import { HiPencilAlt, HiTrash, HiOutlinePlusCircle } from "react-icons/hi";
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import classNames from 'classnames';
import axios from "axios";

function Department() {

    const emptyDepartment = {
        ID: null,
        nameCategory: ''
    };

    const [globalFilter, setGlobalFilter] = useState(null);
    const [visible, setVisible] = useState(false);
    const [departments, setDepartments] = useState(false);
    const [department, setDepartment] = useState(emptyDepartment);
    const [editMode, setEditMode] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [deleteDepartmentDialog, setDeleteDepartmentDialog] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/table_department').then((response) => {
            const departments = response.data
            setDepartments(departments);
        });
    }, []);

    const saveDepartment = () => {
        setSubmitted(true);
        if (editMode) {
            axios
                .put('http://localhost:3001/departmentupdate', department)
                .then(response => {
                    console.log('editemode', "else")
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            axios
                .post('http://localhost:3001/create_department', department)
                // console.log('else', "else")
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        setVisible(false);
    };

    const deleteStatus = async () => {
        // console.log('delete ID', brand)

        try {
            await axios.delete(`http://localhost:3001/deletedepartment/${department.id}`);
            const updateddepartment = department.filter((val) => val.id !== department.id);
            setDepartment(updateddepartment);
            setDeleteDepartmentDialog(false);
            setDepartment(emptyDepartment);
        } catch (error) {
            console.error('Failed to delete Category:', error);
        }
        setDeleteDepartmentDialog(false);

    }

    const indexColumnTemplate = (rowData, column) => {
        return column.rowIndex + 1;
    };

    const onInputChange = (e, nameDepartment) => {
        console.log('nameDepartment', nameDepartment)
        const val = (e.target && e.target.value) || '';
        let _department = { ...department };

        _department[`${nameDepartment}`] = val;

        setDepartment(_department);
    };

    const openNew = () => {
        setDepartment(emptyDepartment);
        setSubmitted(false);
        setEditMode(false);
        setVisible(true);
    };

    const editDepartment = (nameDepartment) => {
        // console.log('kkkkkkk', category)
        setDepartment({ ...nameDepartment });
        setEditMode(true);
        setVisible(true);
    };

    const confirmDeleteDepartment = (nameDepartment) => {
        console.log('nameDepartment', nameDepartment)
        setDepartment(nameDepartment);
        setDeleteDepartmentDialog(true);
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <div className="flex w-max gap-4">
                    <button className="rounded-lg bg-amber-400 hover:text-amber-400 border-amber-400 transition duration-200 flex items-center gap-2"
                        onClick={() => editDepartment(rowData)}>
                        <HiPencilAlt className="h-6 w-6" /> Edite
                    </button>
                    <button className="rounded-lg bg-red-600 hover:text-red-600 border-red-600 transition duration-200 flex items-center gap-2" onClick={() => confirmDeleteDepartment(rowData)}>
                        <HiTrash className="h-6 w-6" /> Delete
                    </button>
                </div>
            </React.Fragment>
        );
    };

    const buttonTemplate = (
        <React.Fragment>
            <button className="bg-lime-500 border-lime-500 hover:text-lime-500 gap-2 flex items-center transition duration-200" onClick={openNew}>
                <HiOutlinePlusCircle className="h-6 w-6" />Add Department
            </button>
        </React.Fragment>
    )

    const header = (
        <div className="flex flex-wrap gap-2 items-center justify-between">
            <h4 className="text-lg text-indigo-700">จัดการแผนก (Manage Department)</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const DepartmentDialogFooter = (
        <React.Fragment>
            <button className="rounded-lg bg-lime-500 hover:text-lime-500 border-lime-500 transition duration-200" onClick={saveDepartment}>บันทึก</button>
            <button className="rounded-lg bg-red-600 hover:text-red-600 border-red-600 transition duration-200" onClick={() => setVisible(false)}>ยกเลิก</button>
        </React.Fragment>
    )

    const deleteDepartmentDialogFooter = (
        <React.Fragment>
            <button className="bg-lime-500 hover:text-lime-500 border-lime-500 transition duration-200" onClick={deleteStatus} >Yes</button>
            <button className="bg-red-600 hover:text-red-600 border-red-600 transition duration-200" onClick={() => setDeleteDepartmentDialog(false)} >No</button>
        </React.Fragment>
    );

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5 p-3">
                <div className="flex items-center justify-between">
                    <label className="text-indigo-700 text-2xl font-medium pb-3">แผนก (Department)</label>
                </div>
                <Toolbar className="mb-4" left={buttonTemplate} />
                <DataTable
                    value={departments}
                    paginator rows={10} rowsPerPageOptions={[10, 25, 50]}
                    style={{ fontSize: '15px', backgroundColor: 'var(--primary-color)', fontFamily: 'K2D' }}
                    header={header}
                    globalFilter={globalFilter}
                    showGridlines
                    stripedRows
                >
                    <Column
                        field="ID"
                        header="ลำดับ (No.)"
                        body={indexColumnTemplate}
                    />
                    <Column
                        field="nameDepartment"
                        header="แผนก (Department)"
                        sortable={true}
                    />
                    <Column
                        body={actionBodyTemplate}
                        exportable={false}
                        header="คำสั่ง (Action)"
                    />
                </DataTable>

                <Dialog header={editMode ? "Edite Department" : "Add Department"} visible={visible} modal onHide={() => setVisible(false)}
                    style={{ width: '40vw', fontFamily: "K2D" }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                    footer={DepartmentDialogFooter}
                >
                    <div className="p-4">
                        <div className="p-inputgroup flex-1 field my-4">
                            <span className='p-inputgroup-addon'>แผนก (Department)</span>
                            <InputText autoFocus value={department.nameDepartment} name="nameDepartment" onChange={(e) => onInputChange(e, 'nameDepartment')}
                                className={classNames({ 'p-invalid': submitted && !department.nameDepartment })} />
                            {submitted && !department.nameDepartment && <small className="p-error">Name is required.</small>}
                        </div>
                    </div>
                </Dialog>

                <Dialog
                    header="Delete Department"
                    visible={deleteDepartmentDialog}
                    onHide={() => setDeleteDepartmentDialog(false)}
                    footer={deleteDepartmentDialogFooter}
                    style={{ width: '38vw', fontFamily: "K2D", }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                    <div className="confirmation-content flex items-center justify-center gap-3 p-3">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '2rem' }} />
                        {department && (
                            <span>
                                Are you sure you want to delete <span className="text-lg text-red-600 font-medium">{department.nameDepartment}</span>?
                            </span>
                        )}
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default Department
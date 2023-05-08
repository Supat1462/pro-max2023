import React, { useState, useEffect } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { HiPencilAlt, HiTrash, HiOutlinePlusCircle } from "react-icons/hi";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import classNames from 'classnames';
import axios from "axios";

function Branch() {

    const emptyBranch = {
        ID: null,
        nameBranch: ''
    };

    const [globalFilter, setGlobalFilter] = useState(null);
    const [branch, setBranch] = useState(emptyBranch);
    const [branchs, setBranchs] = useState(false);
    const [visible, setVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [deleteBranchDialog, setDeleteBranchDialog] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/table_branch').then((response) => {
            const branchs = response.data
            setBranchs(branchs);
        });
    }, []);

    const saveBranch = () => {
        setSubmitted(true);
        if (editMode) {
            axios
                .put('http://localhost:3001/branchupdate', branch)
                .then(response => {
                    console.log('editemode', "else")
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            axios
                .post('http://localhost:3001/create_branch', branch)
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

    const deleteBranch = async () => {
        // console.log('delete ID', brand)

        try {
            await axios.delete(`http://localhost:3001/deletebranch/${branch.id}`);
            const updatedbranch = branch.filter((val) => val.id !== branch.id);
            setBranch(updatedbranch);
            setDeleteBranchDialog(false);
            setBranch(emptyBranch);
        } catch (error) {
            console.error('Failed to delete Category:', error);
        }
        setDeleteBranchDialog(false);

    }

    const openNew = () => {
        setBranch(emptyBranch);
        setSubmitted(false);
        setEditMode(false);
        setVisible(true);
    };

    const onInputChange = (e, nameBranch) => {
        console.log('nameBranch', nameBranch)
        const val = (e.target && e.target.value) || '';
        let _branch = { ...branch };

        _branch[`${nameBranch}`] = val;

        setBranch(_branch);
    };

    const editBranch = (nameBranch) => {
        // console.log('kkkkkkk', category)
        setBranch({ ...nameBranch });
        setEditMode(true);
        setVisible(true);
    };

    const indexColumnTemplate = (rowData, column) => {
        return column.rowIndex + 1;
    };

    const confirmDeleteBranch = (nameBranch) => {
        console.log('nameBranch', nameBranch)
        setBranch(nameBranch);
        setDeleteBranchDialog(true);
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <div className="flex w-max gap-4">
                    <button className="rounded-lg bg-amber-400 hover:text-amber-400 border-amber-400 transition duration-200 flex items-center gap-2"
                        onClick={() => editBranch(rowData)} >
                        <HiPencilAlt className="h-6 w-6" /> Edite
                    </button>
                    <button className="rounded-lg bg-red-600 hover:text-red-600 border-red-600 transition duration-200 flex items-center gap-2" onClick={() => confirmDeleteBranch(rowData)}>
                        <HiTrash className="h-6 w-6" /> Delete
                    </button>
                </div>
            </React.Fragment>
        );
    };

    const buttonTemplate = (
        <React.Fragment>
            <button className="bg-lime-500 border-lime-500 hover:text-lime-500 gap-2 flex items-center transition duration-200" onClick={openNew} >
                <HiOutlinePlusCircle className="h-6 w-6" />Add Branch
            </button>
        </React.Fragment>
    )

    const header = (
        <div className="flex flex-wrap gap-2 items-center justify-between">
            <h4 className="text-lg text-indigo-700">จัดการสาขา (Manage Branch)</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const BranchDialogFooter = (
        <React.Fragment>
            <button className="rounded-lg bg-lime-500 hover:text-lime-500 border-lime-500 transition duration-200" onClick={saveBranch}>บันทึก</button>
            <button className="rounded-lg bg-red-600 hover:text-red-600 border-red-600 transition duration-200" onClick={() => setVisible(false)}>ยกเลิก</button>
        </React.Fragment>
    )

    const deleteBranchDialogFooter = (
        <React.Fragment>
            <button className="bg-lime-500 hover:text-lime-500 border-lime-500 transition duration-200" onClick={deleteBranch} >Yes</button>
            <button className="bg-red-600 hover:text-red-600 border-red-600 transition duration-200" onClick={() => setDeleteBranchDialog(false)} >No</button>
        </React.Fragment>
    );

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5 p-3">
            <div className="flex items-center justify-between">
                <label className="text-indigo-700 text-2xl font-medium pb-3">สาขา (Branch)
                </label>
            </div>
            <Toolbar className="mb-4" left={buttonTemplate} />
            <DataTable
                value={branchs}
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
                    field="nameBranch"
                    header="สาขา (Branch)"
                    sortable={true}
                />
                <Column
                    body={actionBodyTemplate}
                    exportable={false}
                    header="คำสั่ง (Action)"
                />
            </DataTable>

            <Dialog header={editMode ? "Edite Branch" : "Add Branch"} visible={visible} modal onHide={() => setVisible(false)}
                style={{ width: '40vw', fontFamily: "K2D" }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                footer={BranchDialogFooter}
            >
                <div className="p-4">
                    <div className="p-inputgroup flex-1 field my-4">
                        <span className='p-inputgroup-addon'>สาขา (Branch)</span>
                        <InputText autoFocus value={branch.nameBranch} name="nameBranch" onChange={(e) => onInputChange(e, 'nameBranch')}
                            className={classNames({ 'p-invalid': submitted && !branch.nameBranch })} />
                        {submitted && !branch.nameBranch && <small className="p-error">Name is required.</small>}
                    </div>
                </div>
            </Dialog>

            <Dialog
                header="Delete Department"
                visible={deleteBranchDialog}
                onHide={() => setDeleteBranchDialog(false)}
                footer={deleteBranchDialogFooter}
                style={{ width: '38vw', fontFamily: "K2D", }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <div className="confirmation-content flex items-center justify-center gap-3 p-3">
                    <i className="pi pi-exclamation-triangle" style={{ fontSize: '2rem' }} />
                    {branch && (
                        <span>
                            Are you sure you want to delete <span className="text-lg text-red-600 font-medium">{branch.nameBranch}</span>?
                        </span>
                    )}
                </div>
            </Dialog>
        </div>
    )
}

export default Branch
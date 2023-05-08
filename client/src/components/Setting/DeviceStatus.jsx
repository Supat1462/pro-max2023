import React, { useState, useEffect } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { HiPencilAlt, HiTrash, HiOutlinePlusCircle } from "react-icons/hi";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import classNames from 'classnames';
import axios from "axios";

function DeviceStatus() {

    const emptyStatus = {
        ID: null,
        nameCategory: ''
    };

    const [statuss, setStatuss] = useState(null);
    const [status, setStatus] = useState(emptyStatus);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [visible, setVisible] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [deleteStatusDialog, setDeleteStatusDialog] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/table_device_status').then((response) => {
            const statuss = response.data
            setStatuss(statuss);
        });
    }, []);

    const saveStatus = () => {
        setSubmitted(true);
        if (editMode) {
            axios
                .put('http://localhost:3001/statusupdate', status)
                .then(response => {
                    console.log('editemode', "else")
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            axios
                .post('http://localhost:3001/create_device_status', status)
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
            await axios.delete(`http://localhost:3001/deletedevicestatus/${status.ID}`);
            const updatedstatus = status.filter((val) => val.ID !== status.ID);
            setStatus(updatedstatus);
            setDeleteStatusDialog(false);
            setStatus(emptyStatus);
        } catch (error) {
            console.error('Failed to delete Category:', error);
        }
        setDeleteStatusDialog(false);

    }

    const indexColumnTemplate = (rowData, column) => {
        return column.rowIndex + 1;
    };

    const openNew = () => {
        setStatus(emptyStatus);
        setSubmitted(false);
        setEditMode(false);
        setVisible(true);
    };

    const onInputChange = (e, Device_Status) => {
        // console.log('Device_Status', Device_Status)
        const val = (e.target && e.target.value) || '';
        let _status = { ...status };

        _status[`${Device_Status}`] = val;

        setStatus(_status);
    };

    const buttonTemplate = (
        <React.Fragment>
            <button className="bg-lime-500 border-lime-500 hover:text-lime-500 gap-2 flex items-center transition duration-200" onClick={openNew}>
                <HiOutlinePlusCircle className="h-6 w-6" />Add Device Status
            </button>
        </React.Fragment>
    )

    const header = (
        <div className="flex flex-wrap gap-2 items-center justify-between">
            <h4 className="text-lg text-indigo-700">จัดการสถานะอุปกรณ์ (Manage Device Status)</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const StatusDialogFooter = (
        <React.Fragment>
            <button className="rounded-lg bg-lime-500 hover:text-lime-500 border-lime-500 transition duration-200" onClick={saveStatus} >บันทึก</button>
            <button className="rounded-lg bg-red-600 hover:text-red-600 border-red-600 transition duration-200" onClick={() => setVisible(false)}>ยกเลิก</button>
        </React.Fragment>
    )

    const deleteStatusDialogFooter = (
        <React.Fragment>
            <button className="bg-lime-500 hover:text-lime-500 border-lime-500 transition duration-200" onClick={deleteStatus} >Yes</button>
            <button className="bg-red-600 hover:text-red-600 border-red-600 transition duration-200" onClick={() => setDeleteStatusDialog(false)} >No</button>
        </React.Fragment>
    );

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <div className="flex w-max gap-4">
                    <button className="rounded-lg bg-amber-400 hover:text-amber-400 border-amber-400 transition duration-200 flex items-center gap-2" onClick={() => editStatus(rowData)}>
                        <HiPencilAlt className="h-6 w-6" /> Edite
                    </button>
                    <button className="rounded-lg bg-red-600 hover:text-red-600 border-red-600 transition duration-200 flex items-center gap-2" onClick={() => confirmDeleteStatus(rowData)}>
                        <HiTrash className="h-6 w-6"/> Delete
                    </button>
                </div>
            </React.Fragment>
        );
    };

    const editStatus = (Device_Status) => {
        // console.log('kkkkkkk', category)
        setStatus({ ...Device_Status });
        setEditMode(true);
        setVisible(true);
    };

    const confirmDeleteStatus = (Device_Status) => {
        console.log('Device_Status', Device_Status)
        setStatus(Device_Status);
        setDeleteStatusDialog(true);
    };


    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5 p-3">
                <div className="flex items-center justify-between">
                    <label className="text-indigo-700 text-2xl font-medium pb-3">สถานะอุปกรณ์ (Device Status)</label>
                </div>
                <Toolbar className="mb-4" left={buttonTemplate} />
                <DataTable
                    value={statuss}
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
                        field="Device_Status"
                        header="สถานะอุปกรณ์ (Device Status)"
                        sortable={true}
                    />
                    <Column
                        body={actionBodyTemplate}
                        exportable={false}
                        header="คำสั่ง (Action)"
                    />
                </DataTable>

                <Dialog header={editMode ? "Edite Device Status" : "Add Device Status"} visible={visible} modal onHide={() => setVisible(false)}
                    style={{ width: '40vw', fontFamily: "K2D" }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                    footer={StatusDialogFooter}
                >
                    <div className="p-4">
                        <div className="p-inputgroup flex-1 field my-4">
                            <span className='p-inputgroup-addon'>สถานะอุปกรณ์ (Device Status)</span>
                            <InputText autoFocus value={status.Device_Status} name="nameCategory" onChange={(e) => onInputChange(e, 'Device_Status')}
                                className={classNames({ 'p-invalid': submitted && !status.Device_Status })} />
                            {submitted && !status.Device_Status && <small className="p-error">Name is required.</small>}
                        </div>
                    </div>
                </Dialog>

                <Dialog
                    header="Delete Device Status"
                    visible={deleteStatusDialog}
                    onHide={() => setDeleteStatusDialog(false)}
                    footer={deleteStatusDialogFooter}
                    style={{ width: '38vw', fontFamily: "K2D", }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                    <div className="confirmation-content flex items-center justify-center gap-3 p-3">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '2rem' }} />
                        {status && (
                            <span>
                                Are you sure you want to delete <span className="text-lg text-red-600 font-medium">{status.Device_Status}</span>?
                            </span>
                        )}
                    </div>
                </Dialog>
            </div>
        </div>
    )
}

export default DeviceStatus
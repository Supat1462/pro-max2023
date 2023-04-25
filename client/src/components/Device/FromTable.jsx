import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from "primereact/inputtextarea";

import axios from "axios";


function FromTable() {

    let emptyDevice = {
        ID: null,
        Name: '',
        SN_Code: '',
        Brand: '',
        Category: '',
        Status: '',
        Start_Date: '',
        End_Date: '',
        Detail: '',
        Create_Date: '',
    };

    const [data, setData] = useState([]);
    const [device, setDvice] = useState(emptyDevice);
    const [submitted, setSubmitted] = useState(false);
    const [deviceDialog, setDeviceDialog] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [startdate, setStartDate] = useState(null);
    const [enddate, setEndDate] = useState(null);

    const toast = useRef(null);

    useEffect(() => {
        axios.get("http://localhost:3001/table_device")
            .then((response) => {
                const employee = response.data
                employee.sort((a, b) => a.id - b.id);
                // console.log('HHHHH', employee)
                setData(employee);
            });
    }, []);

    useEffect(() => {
        const fetchBrands = async () => {
            const response = await axios.get('http://localhost:3001/table_brand');
            setSelectedBrand(response.selectedBrand);
            console.log('selectedBrand', selectedBrand)
        };

        fetchBrands();
    }, []);



    // const brands = [
    //     { name: 'HP', code: 'NY' },
    //     { name: 'Acer', code: 'RM' },
    //     { name: 'MIS', code: 'LDN' },
    //     { name: 'Dell', code: 'IST' },
    //     { name: 'AOC', code: 'PRS' },
    //     { name: 'ViewSonic', code: 'VIE' },
    //     { name: 'Philips', code: 'PHI' },
    //     { name: 'MAC', code: 'MAC' },
    //     { name: 'Canon', code: 'CAN' },
    //     { name: 'Epson', code: 'EPS' },
    // ];

    const category = [
        { name: 'Laptop', code: 'LAP' },
        { name: 'Adaptor', code: 'ADA' },
        { name: 'Mouse', code: 'MOU' },
        { name: 'Bag', code: 'BAG' },
        { name: 'Keyboard', code: 'KEY' },
        { name: 'Projector', code: 'PRO' },
        { name: 'Monitor', code: 'MON' },
        { name: 'Printer', code: 'PRI' },
        { name: 'Other', code: 'OTH' }
    ];

    const status = [
        { name: 'In Stock', code: 'INS' },
        { name: 'Unavailable', code: 'UNA' },
        { name: 'Not Ready', code: 'NOT' },
        { name: 'Out of Stock', code: 'OUT' },
    ];

    const openNew = () => {
        setDvice(emptyDevice);
        setSubmitted(false);
        setDeviceDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setDeviceDialog(false);
    };

    const saveDevice = () => {
        setSubmitted(true);

        if (device.Name.trim()) {
            let _data = [...data];
            let _device = { ...device };

            if (device.ID) {
                const index = findIndexById(device.ID);

                _data[index] = _device;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Device Updated', life: 3000 });
            } else {
                _device.ID = createId();
                _data.push(_device);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Device Created', life: 3000 });
            }

            setData(_data);
            setDeviceDialog(false);
            setData(emptyDevice);
        }
    };

    const findIndexById = (ID) => {
        let index = -1;

        for (let i = 0; i < data.length; i++) {
            if (data[i].ID === ID) {
                index = i;
                break;
            }
        }

        return index;
    };

    const createId = () => {
        let ID = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 5; i++) {
            ID += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return ID;
    };


    const onInputChange = (e, name) => {
        console.log('eeeeee', e)
        const val = (e.target && e.target.value) || '';
        let _device = { ...device };

        _device[`${name}`] = val;

        setDvice(_device);
    };

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <Button label="เพิ่มอุปกรณ์" icon="pi pi-plus" severity="success" onClick={openNew} />
            </div>
        );
    };

    const rightToolbarTemplate = () => {
        return <Button label="Export" icon="pi pi-upload" className="p-button-help" />;
    };

    const editDevice = (device) => {
        setDvice({ ...device });
        setDeviceDialog(true);
    };

    const header = (
        <div className="flex flex-wrap gap-2 items-center justify-between">
            <h4 className="m-0 text-xl">Manage Device</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const dateFormat = "mm/dd/yy";

    const dateTemplate = (rowData) => {
        const formattedDate = new Date(rowData.End_Date).toLocaleDateString('en-US', { dateFormat });
        // console.log('row', rowData.End_Date)
        return <span>{formattedDate}</span>;
    };

    const deviceDialogFooter = (
        <React.Fragment>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveDevice} />
        </React.Fragment>
    );

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined severity="success" onClick={() => editDevice(rowData)} />
                <Button icon="pi pi-trash" rounded outlined severity="danger" />
            </React.Fragment>
        );
    };

    console.log('device', device)

    const invalidDate = new Date(dateFormat);
    console.log(invalidDate); // Invalid Date

    const renderIndex = (rowData, column) => {
        return (
            <span>{data.findIndex((obj) => obj.id === rowData.id) + 1}</span>
        );
    };

    return (
        <div className="card">

            <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
            <DataTable
                value={data}
                showGridlines
                stripedRows
                header={header}
                globalFilter={globalFilter}
                paginator rows={10} rowsPerPageOptions={[10, 25, 50]}
                style={{ fontSize: '13px', backgroundColor: 'var(--primary-color)', fontFamily: 'K2D' }}>
                <Column body={renderIndex} header="ลำดับ" sortable></Column>
                <Column field="SN_Code" header="รหัสอุปกรณ์"></Column>
                <Column field="Name" header="ชื่ออุปกรณ์"></Column>
                <Column field="Brand" header="ยี่ห้อ"></Column>
                <Column field="Category" header="ประเภทอุปกรณ์"></Column>
                <Column field="Status" header="สถานะ"></Column>
                <Column field="End_Date" header="วันหมดประกัน" body={dateTemplate}></Column>
                <Column header="แก้ไข" body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem', textAlign: 'center' }}></Column>
            </DataTable>


            <Dialog visible={deviceDialog} style={{ width: '60rem', fontFamily: 'K2D', fontSize: '14px', flexDirection: 'column', justifyContent: 'center' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="รายละเอียดอุปกรณ์" modal className="p-fluid" footer={deviceDialogFooter} onHide={hideDialog}>
                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1 field my-4">
                        <span className='p-inputgroup-addon'>รหัสอุปกรณ์</span>
                        <InputText id="SN_Code" value={device.SN_Code} onChange={(e) => onInputChange(e, 'SN_Code')} />
                        {submitted && !device.SN_Code}
                    </div>
                    <div className="p-inputgroup flex-1 field my-4">
                        <span className='p-inputgroup-addon'>ชื่ออุปกรณ์</span>
                        <InputText id="Name" value={device.Name} onChange={(e) => onInputChange(e, 'Name')} />
                        {submitted && !device.Name}
                    </div>
                </div>
                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1 field my-4">
                        <span className='p-inputgroup-addon'>ยี่ห้อ</span>
                        <Dropdown
                            options={selectedBrand}
                            optionLabel="name"
                            placeholder="Select a brand"
                        />
                        {submitted && !device.Brand}
                    </div>
                    <div className="p-inputgroup flex-1 field my-4">
                        <span className='p-inputgroup-addon'>ประเภทอุปกรณ์</span>
                        <Dropdown id='catagory' value={device.Category} onChange={(e) => onInputChange(e, 'Category')} options={category} optionLabel="name"
                            className="w-full md:w-14rem" />
                        {submitted && !device.Category}
                    </div>
                </div>
                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1 field my-4">
                        <span className='p-inputgroup-addon'>สถานะอุปกรณ์</span>
                        <Dropdown id='Status' value={device.Status} onChange={(e) => onInputChange(e, 'Status')} options={status} optionLabel="name"
                            className="w-full md:w-14rem" />
                        <span>{device.Status}</span>
                        {submitted && !device.Status}
                    </div>
                    <div className="p-inputgroup flex-1 field my-4">
                        <span className='p-inputgroup-addon'>วันเริ่มประกัน</span>
                        <Calendar
                            id='Start_Date'
                            value={device.Start_Date}
                            dateFormat="mm/dd/yy"
                            onChange={(e) => onInputChange(e, 'Start_Date')}
                            showIcon />
                        {submitted && !device.Start_Date}
                    </div>
                </div>
                <div className="card flex flex-column md:flex-row gap-3">
                    <div className="p-inputgroup flex-1 field my-4">
                        <span className='p-inputgroup-addon'>วันหมดประกัน</span>
                        <Calendar
                            id='End_Date'
                            value={device.End_Date}
                            dateFormat="mm/dd/yy"
                            onChange={(e) => onInputChange(e, 'End_Date')}
                            showIcon />
                        {submitted && !device.End_Date}
                    </div>
                </div>
                <div className="field my-6">
                    <span className="p-float-label">
                        <InputTextarea id="Detail" value={device.Detail} onChange={(e) => onInputChange(e, 'Detail')} required rows={3} cols={20} />
                        <label htmlFor="description">รายละเอียด</label>
                        {submitted && !device.Detail}
                    </span>
                </div>

            </Dialog >


        </div >
    )
}

export default FromTable
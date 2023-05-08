import React, { useState, useEffect } from "react";
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Toolbar } from 'primereact/toolbar';
// import { toast } from 'react-toastify';
import classNames from 'classnames';
import axios from "axios";
// react-icons
import { HiPencilAlt, HiTrash, HiOutlinePlusCircle } from "react-icons/hi";

function Brand() {

    const emptyBrand = {
        ID: null,
        Brand: ''
    };

    // open dialog
    const [visible, setVisible] = useState(false);

    const [deleteBrandDialog, setDeleteBrandDialog] = useState(false);
    const [brand, setBrand] = useState(emptyBrand);
    const [brands, setBrands] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3001/table_brand').then((response) => {
            const brands = response.data
            setBrands(brands);
        });
    }, []);

    const saveBrand = () => {
        setSubmitted(true);
        if (editMode) {
            axios
                .put('http://localhost:3001/brandupdate', brand)
                .then(response => {
                    console.log('editemode', "else")
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            axios
                .post('http://localhost:3001/create_brand', brand)
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

    const deleteBrand = async () => {
        // console.log('delete ID', brand)

        try {
            await axios.delete(`http://localhost:3001/deletebrand/${brand.ID}`);
            const updatedBrands = brands.filter((val) => val.ID !== brand.ID);
            setBrands(updatedBrands);
            setDeleteBrandDialog(false);
            setBrand(emptyBrand);
        } catch (error) {
            console.error('Failed to delete brand:', error);
        }
        setDeleteBrandDialog(false);

    }

    const openNew = () => {
        setBrand(emptyBrand);
        setSubmitted(false);
        setEditMode(false);
        setVisible(true);
    };

    const indexColumnTemplate = (rowData, column) => {
        return column.rowIndex + 1;
    };


    const confirmDeleteBrand = (Brand) => {
        console.log('Brand', Brand)
        setBrand(Brand);
        setDeleteBrandDialog(true);
    };

    const editBrand = (brand) => {
        // console.log('kkkkkkk', brand)
        setBrand({ ...brand });
        setEditMode(true);
        setVisible(true);
    };

    const onInputChange = (e, Brand) => {
        // console.log('Brandxxxxx', Brand)
        const val = (e.target && e.target.value) || '';
        let _brand = { ...brand };

        _brand[`${Brand}`] = val;

        setBrand(_brand);
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <div className="flex w-max gap-4">
                    <button className="rounded-lg bg-amber-400 hover:text-amber-400 border-amber-400 transition duration-200 flex items-center gap-2" onClick={() => editBrand(rowData)} >
                        <HiPencilAlt className="h-6 w-6" /> Edite
                    </button>
                    <button className="rounded-lg bg-red-600 hover:text-red-600 border-red-600 transition duration-200 flex items-center gap-2" onClick={() => confirmDeleteBrand(rowData)}>
                        <HiTrash className="h-6 w-6" /> Delete
                    </button>
                </div>
            </React.Fragment>
        );
    };

    const header = (
        <div className="flex flex-wrap gap-2 items-center justify-between">
            <h4 className="text-lg text-indigo-700">จัดการยี่ห้ออุปกรณ์ (Manage Brand Device)</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const brandDialogFooter = (
        <React.Fragment>
            <button className="rounded-lg bg-lime-500 hover:text-lime-500 border-lime-500 transition duration-200" onClick={saveBrand}>บันทึก</button>
            <button className="rounded-lg bg-red-600 hover:text-red-600 border-red-600 transition duration-200" onClick={() => setVisible(false)}>ยกเลิก</button>
        </React.Fragment>
    )

    const deleteBrandDialogFooter = (
        <React.Fragment>
            <button className="bg-lime-500 hover:text-lime-500 border-lime-500 transition duration-200" onClick={deleteBrand} >Yes</button>
            <button className="bg-red-600 hover:text-red-600 border-red-600 transition duration-200" onClick={() => setDeleteBrandDialog(false)} >No</button>
        </React.Fragment>
    );


    const buttonTemplate = (
        <React.Fragment>
            <button className="bg-lime-500 border-lime-500 hover:text-lime-500 gap-2 flex items-center transition duration-200" onClick={openNew} >
                <HiOutlinePlusCircle className="h-6 w-6" />Add Brand
            </button>
        </React.Fragment>
    )


    return (
        <div className="">
            <div className="card">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5 p-3">
                    <div className="flex items-center justify-between">
                        <label className="text-indigo-700 text-2xl font-medium pb-3">ยี่ห้ออุปกรณ์ (Brand Device)</label>
                    </div>
                    <Toolbar className="mb-4" left={buttonTemplate} />
                    <DataTable
                        value={brands}
                        paginator rows={10} rowsPerPageOptions={[10, 25, 50]}
                        style={{ fontSize: '15px', backgroundColor: 'var(--primary-color)', fontFamily: 'K2D' }}
                        header={header}
                        globalFilter={globalFilter}
                        showGridlines
                        stripedRows
                    >
                        <Column
                            field="id"
                            header="ลำดับ (No.)"
                            body={indexColumnTemplate}
                        />
                        <Column
                            field="Brand"
                            header="ชื่อยี่ห้อ (Name)"
                            sortable={true}
                        />
                        <Column
                            body={actionBodyTemplate}
                            exportable={false}
                            header="คำสั่ง (Action)"
                        />
                    </DataTable>
                </div>
            </div>

            <Dialog header={editMode ? "Edite Brand Device" : "Add Brand Device"} visible={visible} modal onHide={() => setVisible(false)}
                style={{ width: '30vw', fontFamily: "K2D" }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                footer={brandDialogFooter}
            >
                <div className="p-4">
                    <div className="p-inputgroup flex-1 field my-4">
                        <span className='p-inputgroup-addon'>ชื่อ (Name)</span>
                        <InputText autoFocus value={brand.Brand} name="Brand" onChange={(e) => onInputChange(e, 'Brand')}
                            className={classNames({ 'p-invalid': submitted && !brand.Brand })} />
                        {submitted && !brand.Brand && <small className="p-error">Name is required.</small>}
                    </div>
                </div>
            </Dialog>

            <Dialog
                header="Delete Brand"
                visible={deleteBrandDialog}
                onHide={() => setDeleteBrandDialog(false)}
                footer={deleteBrandDialogFooter}
                style={{ width: '38vw', fontFamily: "K2D", }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <div className="confirmation-content flex items-center justify-center gap-3 p-3">
                    <i className="pi pi-exclamation-triangle" style={{ fontSize: '2rem' }} />
                    {brand && (
                        <span>
                            Are you sure you want to delete <span className="text-lg text-red-600 font-medium">{brand.Brand}</span>?
                        </span>
                    )}
                </div>
            </Dialog>

        </div >
    )
}

export default Brand
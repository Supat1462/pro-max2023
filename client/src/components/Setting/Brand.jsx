import React, { useState, useEffect } from "react";
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { toast } from 'react-toastify';
import axios from "axios";
// react-icons
import { HiPencilAlt, HiTrash } from "react-icons/hi";

function Brand() {

    const nameBrand = {
        ID: null,
        Brand: ''
    };

    // open dialog
    const [visible, setVisible] = useState(false);

    const [deleteBrandDialog, setDeleteBrandDialog] = useState(false);
    const [brand, setBrand] = useState(nameBrand);
    const [brands, setBrands] = useState(['']);
    const [globalFilter, setGlobalFilter] = useState(null);
    // const [name, setName] = useState('');

    const [editMode, setEditMode] = useState(false);
    console.log('brand', brand)
    const saveBrand = (data) => {
        console.log('data', data)
        axios.put(`http://localhost:3001/table_brand/${data.ID}`, data.Brand)
            .then(res => console.log(`Update ${data.ID} success`))
        // if (editMode) {
        //     // update data
        //     axios.put(`http://localhost:3001/table_brand/${brand.ID}`, brand)
        //         .then(response => {
        //             // handle success
        //             console.log(response.data);
        //             setBrands(brands.map(p => p.ID === brand.ID ? brand : p));
        //             toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Brand Updated', life: 3000 });
        //         })
        //         .catch(error => {
        //             // handle error
        //             console.log(error);
        //         });
        // } else {
        //     // create data
        //     axios.post('http://localhost:3001/create_brand', brand)
        //         .then(response => {
        //             // handle success
        //             console.log(response.data);
        //             const newBrand = { ...brand, ID: response.data.ID };
        //             setBrands([...brands, newBrand]);
        //             toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Brand Created', life: 3000 });
        //         })
        //         .catch(error => {
        //             // handle error
        //             console.log(error);
        //         });
        // }
        // setBrand(nameBrand);
        // setEditMode(false);
        // setVisible(false);
    };

    const handleEdite = (rowData) => {
        console.log('row', rowData)
        setEditMode(true);
        // saveBrand(rowData)
        setBrand(rowData);
        setVisible(true);
    };

    const handleCreate = () => {
        setEditMode(false);
        setBrand(nameBrand);
        setVisible(true);
    }

    const handleChange = (e) => {
        // e.preventDefault();
        let Brand = e.target.value;
        let ID = e.target.id;
        setBrand({ ID: ID, Brand: Brand })
    }

    useEffect(() => {
        axios.get('http://localhost:3001/table_brand').then((response) => {
            const brands = response.data
            setBrands(brands);
        });
    }, []);

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const data = {
    //         name: name,
    //     };

    //     axios.post('http://localhost:3001/create_brand', data)
    //         .then(response => {
    //             console.log(response.data);
    //             // console.log('XXXXXXXXXXXXXXXXXX', data)
    //             toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    const deleteData = (id) => {
        console.log('ddddddddddddddd', id)
        axios
            .delete(`http://localhost:3001/delete_brand/${id}`)
            .then((response) => {
                setBrand(
                    brand.filter((item) => {
                        console.log('dddddddddddddddddd', brand)
                        return item.id !== id;
                    })
                )
                // Show success toast
                toast.success('Data deleted successfully');

                // Refresh data
            })
            .catch((error) => {
                // Show error toast
                toast.error('An error occurred while deleting data');
            });
    };


    const openNew = () => {
        setVisible(true);
    };

    // const editBrand = (brand) => {
    //     console.log('KKKKKKKKKKKKKKKKK', brand)
    //     setVisible(true);
    // }

    const header = (
        <div className="flex flex-wrap gap-2 items-center justify-between">
            <h4 className="m-0 text-xl text-indigo-700">Manage Brand</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const indexColumnTemplate = (rowData, column) => {
        return column.rowIndex + 1;
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <div className="flex w-max gap-4">
                    <button className="bg-brand-500 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200 rounded-xl  text-base font-medium text-white transition duration-200 dark:text-white" onClick={() => handleEdite(rowData)}>
                        <HiPencilAlt />
                    </button>
                    <button className="bg-brand-500 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200 rounded-xl  text-base font-medium text-white transition duration-200 dark:text-white" onClick={() => setDeleteBrandDialog(true)}>
                        <HiTrash />
                    </button>
                </div>
            </React.Fragment>
        );
    };

    const brandDialogFooter = (
        <React.Fragment>
            <button className="rounded-lg" onClick={saveBrand(brand)} >บันทึก</button>
            <button className="rounded-lg" onClick={() => setVisible(false)}>ยกเลิก</button>
        </React.Fragment>
    )

    const deleteBrandDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" outlined onClick={() => setDeleteBrandDialog(false)} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteData} />
        </React.Fragment>
    );


    const buttonTemplate = () => {
        return (
            <div className="flex flex-wrap">
                <button className="rounded-lg" onClick={handleCreate}>Add +</button>
            </div>
        )
    }


    return (
        <div className="">
            <div className="flex items-center justify-between">
                <label className="text-indigo-700 text-lg font-medium">ยี่ห้ออุปกรณ์</label>
            </div>

            <div className="card">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5">
                    <Toolbar className="mb-4" left={buttonTemplate} />
                    <DataTable
                        value={brands}
                        style={{
                            fontSize: "15px",
                            backgroundColor: "var(--primary-color)",
                            fontFamily: "K2D",
                            minWidth: "40rem",
                        }}
                        header={header}
                        globalFilter={globalFilter}
                        stripedRows
                    >
                        <Column
                            field="id"
                            header="ลำดับ"
                            body={indexColumnTemplate}
                        />
                        <Column
                            field="Brand"
                            header="ชื่อยี่ห้อ"
                            sortable={true}
                        />
                        <Column
                            body={actionBodyTemplate}
                            exportable={false}
                            header="แก้ไข"
                        />
                    </DataTable>
                </div>
            </div>

            <Dialog header={editMode ? "Edite Brand" : "Add Brand"} visible={visible} modal onHide={() => setVisible(false)}
                style={{ width: '40vw', fontFamily: "K2D", }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                footer={brandDialogFooter}
            >
                <div className="p-4">
                    <div className="p-inputgroup flex-1 field my-4">
                        <span className='p-inputgroup-addon'>ชื่อ (Name)</span>
                        <InputText id={brand.ID}
                        autoFocus value={brand.Brand} onChange={(e) => handleChange(e, 'Brand')} />
                    </div>
                </div>
            </Dialog>

            <Dialog
                header="Delete Brand"
                visible={deleteBrandDialog}
                onHide={() => setDeleteBrandDialog(false)}
                footer={deleteBrandDialogFooter}
                style={{ width: '40vw', fontFamily: "K2D", }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {brands && (
                        <span>
                            Are you sure you want to delete <b>{brands.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

        </div >
    )
}

export default Brand
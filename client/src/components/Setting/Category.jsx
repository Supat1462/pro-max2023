import React, { useState, useEffect } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import classNames from 'classnames';
import axios from "axios";
import { HiPencilAlt, HiTrash, HiOutlinePlusCircle } from "react-icons/hi";
function Category() {

    // const [submitted, setSubmitted] = useState(false);
    // const [editMode, setEditMode] = useState(!!brand.ID);
    // const [currentBrand, setCurrentBrand] = useState(brand || emptyCat);

    const emptyCategory = {
        ID: null,
        nameCategory: ''
    };

    const [submitted, setSubmitted] = useState(false);
    const [visible, setVisible] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [category, setCategory] = useState(emptyCategory);
    const [categorys, setCategorys] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [deleteCategoryDialog, setDeleteCategoryDialog] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:3001/table_category').then((response) => {
            const categorys = response.data
            setCategorys(categorys);
        });
    }, []);

    const saveCategory = () => {
        setSubmitted(true);
        if (editMode) {
            axios
                .put('http://localhost:3001/categoryupdate', category)
                .then(response => {
                    console.log('editemode', "else")
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            axios
                .post('http://localhost:3001/create_category', category)
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

    const deleteCategory = async () => {
        // console.log('delete ID', brand)

        try {
            await axios.delete(`http://localhost:3001/deletecategory/${category.ID}`);
            const updatedCategory = category.filter((val) => val.ID !== category.ID);
            setCategory(updatedCategory);
            setDeleteCategoryDialog(false);
            setCategory(emptyCategory);
        } catch (error) {
            console.error('Failed to delete Category:', error);
        }
        setDeleteCategoryDialog(false);

    }

    const leftToolbarTemplate = () => {
        return (
            <div className="flex flex-wrap gap-2">
                <button
                    className="rounded-lg bg-lime-500 border-lime-500 hover:text-lime-500 gap-2 flex items-center transition duration-200" onClick={openNew}>
                    <HiOutlinePlusCircle className="h-6 w-6" />Add Category
                </button>
            </div>
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <div className="flex w-max gap-4">
                    <button className="rounded-lg bg-amber-400 hover:text-amber-400 border-amber-400 transition duration-200 flex items-center gap-2" onClick={() => editCategory(rowData)}>
                        <HiPencilAlt className="h-6 w-6" /> Edite
                    </button>
                    <button className="rounded-lg bg-red-600 hover:text-red-600 border-red-600 transition duration-200 flex items-center gap-2" onClick={() => confirmDeleteCategory(rowData)}>
                        <HiTrash className="h-6 w-6" /> Delete
                    </button>
                </div>
            </React.Fragment>
        );
    };

    const header = (
        <div className="flex flex-wrap gap-2 items-center justify-between">
            <h4 className="text-lg text-indigo-700">จัดการประเภทอุปกรณ์ (Manage Category Device)</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const CategoryDialogFooter = (
        <React.Fragment>
            <button className="rounded-lg bg-lime-500 hover:text-lime-500 border-lime-500 transition duration-200" onClick={saveCategory} >บันทึก</button>
            <button className="rounded-lg bg-red-600 hover:text-red-600 border-red-600 transition duration-200" onClick={() => setVisible(false)} >ยกเลิก</button>
        </React.Fragment>
    )

    const deleteCategoryDialogFooter = (
        <React.Fragment>
            <button className="bg-lime-500 hover:text-lime-500 border-lime-500 transition duration-200" onClick={deleteCategory} >Yes</button>
            <button className="bg-red-600 hover:text-red-600 border-red-600 transition duration-200" onClick={() => setDeleteCategoryDialog(false)} >No</button>
        </React.Fragment>
    );

    const indexColumnTemplate = (rowData, column) => {
        return column.rowIndex + 1;
    };

    const onInputChange = (e, nameCategory) => {
        console.log('nameCategory', nameCategory)
        const val = (e.target && e.target.value) || '';
        let _category = { ...category };

        _category[`${nameCategory}`] = val;

        setCategory(_category);
    };

    const openNew = () => {
        setCategory(emptyCategory);
        setSubmitted(false);
        setEditMode(false);
        setVisible(true);
    };

    const editCategory = (category) => {
        // console.log('kkkkkkk', category)
        setCategory({ ...category });
        setEditMode(true);
        setVisible(true);
    };

    const confirmDeleteCategory = (nameCategory) => {
        // console.log('nameCategory', nameCategory)
        setCategory(nameCategory);
        setDeleteCategoryDialog(true);
    };

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5 p-3">
                <div className="flex items-center justify-between">
                    <label className="text-indigo-700 text-2xl font-medium pb-3">ประเภทอุปกรณ์ (Category Device)</label>
                </div>
                <Toolbar className="mb-4" left={leftToolbarTemplate}></Toolbar>
                <DataTable
                    value={categorys}
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
                        field="nameCategory"
                        header="ประเภท (Category)"
                        sortable={true}
                    />
                    <Column
                        body={actionBodyTemplate}
                        exportable={false}
                        header="คำสั่ง (Action)"
                    />
                </DataTable>
            </div>
            <Dialog header={editMode ? "Edite Category Device" : "Add Category Device"} visible={visible} modal onHide={() => setVisible(false)}
                style={{ width: '30vw', fontFamily: "K2D" }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                footer={CategoryDialogFooter}
            >
                <div className="p-4">
                    <div className="p-inputgroup flex-1 field my-4">
                        <span className='p-inputgroup-addon'>ประเภท (Category)</span>
                        <InputText autoFocus value={category.nameCategory} name="nameCategory" onChange={(e) => onInputChange(e, 'nameCategory')}
                            className={classNames({ 'p-invalid': submitted && !category.nameCategory })} />
                        {submitted && !category.nameCategory && <small className="p-error">Name is required.</small>}
                    </div>
                </div>
            </Dialog>

            <Dialog
                header="Delete Brand"
                visible={deleteCategoryDialog}
                onHide={() => setDeleteCategoryDialog(false)}
                footer={deleteCategoryDialogFooter}
                style={{ width: '38vw', fontFamily: "K2D", }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <div className="confirmation-content flex items-center justify-center gap-3 p-3">
                    <i className="pi pi-exclamation-triangle" style={{ fontSize: '2rem' }} />
                    {category && (
                        <span>
                            Are you sure you want to delete <span className="text-lg text-red-600 font-medium">{category.nameCategory}</span>?
                        </span>
                    )}
                </div>
            </Dialog>
        </div>
    )
}

export default Category
import React, { useState } from 'react'
import AddEmployee from './AddEmployee';
import ModalAddEmployee from './ModalAddEmployee';
import DataTableEmployee from './DataTableEmployee';
import TableName from './tableName';
import { HiUserGroup } from "react-icons/hi";

function Employee() {

    // funtion open Modal AddEmployee
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };
    const handleCloseModal = () => {
        setIsOpen(false);
    };


    return (
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 container mt-5 shadow-md rounded-lg py-5 mb-10'>

            <div className="heder">
                <h1 className='lg:text-3xl font-bold text-indigo-700 sm1:text-2xl py-2 items-center flex gap-2'>Employee
                    <HiUserGroup />
                </h1>
                <hr className='my-3' />
            </div>

            <div className="">
                <button className="text-white font-bold py-2 px-4 rounded lg:text-base sm1:text-sm" onClick={handleOpenModal}>
                    เพิ่มข้อมูลพนักงาน
                </button>
                <ModalAddEmployee isOpen={isOpen} onClose={handleCloseModal}>
                    <AddEmployee />
                </ModalAddEmployee>

                <div className="">
                    {/* table employee */}
                    <TableName />
                </div>
            </div>


        </div>
    )
}

export default Employee
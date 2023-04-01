import React, { useState } from 'react'
import AddEmployee from './AddEmployee';
import ModalAddEmployee from './ModalAddEmployee';
import DataTableEmployee from './DataTableEmployee';


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
                <h1 className='lg:text-3xl font-bold text-indigo-700 sm1:text-2xl sm1:px-4'>Employee</h1>
                <hr className='my-3' />
            </div>

            <div className="sm1:px-3 ">
                <button className="text-white font-bold py-2 px-4 rounded lg:text-base sm1:text-sm" onClick={handleOpenModal}>
                    เพิ่มข้อมูลพนักงาน
                </button>
                <p className='pt-4 font-bold lg:text-xl sm1:text-sm'>พบจำนวนสมาชิก  รายการ</p>
                <ModalAddEmployee isOpen={isOpen} onClose={handleCloseModal}>
                    <AddEmployee />
                </ModalAddEmployee>

                <div className="">
                    {/* table employee */}
                    <DataTableEmployee />
                </div>
            </div>


        </div>
    )
}

export default Employee
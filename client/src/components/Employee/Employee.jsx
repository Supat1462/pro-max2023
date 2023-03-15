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
                <button className="text-white font-bold py-2 px-4 rounded lg:text-base sm1:text-sm bg-blue-300 border-blue-300" onClick={handleOpenModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#105cb9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                </button>
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
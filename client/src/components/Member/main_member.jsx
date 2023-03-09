import React, { useState } from 'react'
import AddEmployee from './add_member';
import ModalEmployee from './ModalAddEmployee';
import MemberTable from './member_table';
import AddButton from './add_button_member';
import AddForm from './add_member_form';

function Employee() {

    // funtion open Modal AddEmployee
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleAddClick = () => {
        setShowModal(true);
    }
    const handleModalClose = () => {
        setShowModal(false);
    }


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

                <AddButton onClick={() => handleAddClick()} />
                <div className="">
                    {/* table employee */}
                    <MemberTable />
                </div>
            </div>

            {showModal && (
                <AddForm onClose={handleModalClose} />
            )}
        </div>
    )
}

export default Employee
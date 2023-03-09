import React, { useState, useEffect } from "react";


const ModalViewEmployee = ({ isOpen, onClose, emy }) => {
    const handleClose = () => {
        onClose();
    };

    // Date
    // const date = new Date();

    const [data, setData] = useState(null);
    const [id, setId] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 relative lg:w-2/5 sm:w-96">
                        <button className="absolute top-0 right-0 m-4 hover:bg-white hover:text-indigo-700" onClick={handleClose}>
                            <svg
                                className="w-6 h-6 text-whit"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* ModalViewEmployee */}
                        <div className="mt-10 sm:mt-0">
                            <h2 className="lg:text-2xl sm1:text-xl mb-4 text-indigo-700 font-bold">ข้อมูลพนักงาน</h2>
                            <form>
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="border-t border-gray-200">

                                            
                                            <dl>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">รหัสพนักงาน</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{emy.IDEmployee}</dd>
                                                </div>
                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">ชื่อ - นามสกุล</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{emy.name}</dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">แผนก</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{emy.department}</dd>
                                                </div>
                                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">สำนักงาน</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{emy.location}</dd>
                                                </div>
                                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                    <dt className="text-sm font-medium text-gray-500">สถานะ</dt>
                                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                    {emy.StatusEmployee}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            )}
        </>
    );
};

export default ModalViewEmployee;

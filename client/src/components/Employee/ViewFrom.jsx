import React from 'react';



const ViewFrom = ({ employee, onClose }) => {


    const handleClose = () => {
        onClose();
    };

    return (
        <section className='fixed inset-0 min-h-screen flex justify-center items-center bg-gray-400 p-20 bg-opacity-50'>
            <div className="overflow-hidden bg-white shadow rounded-lg relative sm1:mx-0 lg:mx-56 lg:w-[700px] sm1:w-screen">
                <button className="absolute top-0 right-0 m-4 hover:bg-white hover:text-indigo-700" onClick={handleClose}>
                    <svg
                        className="lg:w-6 lg:h-6 sm1:w-3 sm1:h-3 text-whit"
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

                {/* ------------------ */}
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="lg:text-2xl sm1:text-xl mb-4 text-indigo-700 font-bold">ข้อมูลพนักงาน</h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">รหัสพนักงาน</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{employee.IDEmployee}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">ชื่อ - นามสกุล</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{employee.name}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">แผนก</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{employee.department}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">สำนักงาน</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{employee.location}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">สถานะ</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {employee.StatusEmployee}
                            </dd>
                        </div>
                    </dl>
                </div>

            </div>
        </section>
    );
}

export default ViewFrom
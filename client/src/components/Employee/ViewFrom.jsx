import React from 'react';



const ViewFrom = ({ data, onClose }) => {


    const handleClose = () => {
        onClose();
    };

    return (
        <section className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50">
            <div className="relative overflow-hidden bg-white shadow rounded-lg lg:mx-auto lg:max-w-7xl mx-4 py-6 px-6 sm:p-6 md:py-10 md:px-8 top-20">
                <button className="absolute top-0 right-0 m-4 hover:bg-white hover:text-indigo-700" onClick={handleClose}>
                    <svg
                        className="lg:w-6 lg:h-6 w-5 h-5 text-whit"
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
                <div>
                    <h3 className="lg:text-2xl sm1:text-xl mb-4 text-indigo-700 font-bold">ข้อมูลพนักงาน</h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">รหัสพนักงาน</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.Emp_Code}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">ชื่อ</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.NameTH}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">นามสกุล</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.SurnameTH}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">แผนก</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.Department}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">สาขา</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{data.Branch}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">สถานะ</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                {data.Status}
                            </dd>
                        </div>
                    </dl>
                </div>

            </div>
        </section>
    );
}

export default ViewFrom
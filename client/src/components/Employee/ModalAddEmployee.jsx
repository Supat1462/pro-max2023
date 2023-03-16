import React from "react";

const ModalAddEmployee = ({ isOpen, onClose, children }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50">
                    <div className="relative overflow-hidden bg-white shadow rounded-lg lg:m-32 m-6 py-6 px-6 sm:p-6 md:py-10 md:px-8">
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
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalAddEmployee;

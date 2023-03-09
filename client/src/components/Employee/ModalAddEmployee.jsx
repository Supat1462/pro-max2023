import React from "react";

const ModalAddEmployee = ({ isOpen, onClose, children }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 max-h-full">
                    <div className="bg-white rounded-lg p-8 relative lg:w-2/5 sm1:w-screen">
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

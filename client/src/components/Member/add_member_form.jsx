import React, { useState } from 'react';

const AddForm = ({ employee, onClose }) => {
  const [nameMember, setNameMember] = useState('');
  const [memberID, setMemberID] = useState('');
  const [operation, setOperation] = useState('');
  const [office, setOffice] = useState('');

  const handleChange = (event) => {
    setNameMember(event.target.value);
    setMemberID(event.target.value);
    setOperation(event.target.value);
    setOffice(event.target.value);
  }

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send updated employee data to server
    onClose();
  }

  return (
    <div className="modal fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 max-h-full">
      <div className="modal-content bg-white rounded-lg p-8 relative lg:w-2/5 sm1:w-screen">
        <h2>เพิ่มสมาชิก</h2>
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
        <form onSubmit={handleSubmit}>
          <label>
            รหัสพนักงาน:
            <input type="email" value={memberID} onChange={handleChange} />
          </label>
          <label>
            ชื่อพนักงาน:
            <input type="text" value={nameMember} onChange={handleChange} />
          </label>
          <label>
            แผนก:
            <input type="text" value={operation} onChange={handleChange} />
          </label>
          <label>
            สำนักงาน:
            <input type="text" value={office} onChange={handleChange} />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddForm;



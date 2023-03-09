import React, { useState } from 'react';

const EditForm = ({ isOpen, employee, onClose }) => {
  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send updated employee data to server
    onClose();
  }


  return (
    <div className="mt-10 sm:mt-0">
      <h2 className="lg:text-2xl sm1:text-xl mb-4 text-indigo-700 font-bold">ข้อมูลพนักงาน</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default EditForm;

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

 

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send updated employee data to server
    onClose();
  }

  return (
    <div>
      <h2>เพิ่มสมาชิก</h2>
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
  );
}

export default AddForm;

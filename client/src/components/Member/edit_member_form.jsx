import React, { useState } from 'react';
import axios from 'axios';
const EditForm = ({ employee, onClose }) => {
  const [nameMember, setNameMember] = useState(employee.nameMember);
  const [memberID, setMemberID] = useState(employee.memberID);
  const [operation, setOperation] = useState(employee.operation);
  const [office, setOffice] = useState(employee.office);

  const handleChange = (event) => {
    setNameMember(event.target.value);
    setMemberID(event.target.value);
    setOperation(event.target.value);
    setOffice(event.target.value);

  }

 

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedEmployee = {
      nameMember,
      memberID,
      operation,
      office
    };
    axios.post('http://192.168.0.145:9797/api/update-member', updatedEmployee)
      .then((response) => {
        console.log(response);
        onClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>แก้ไขสมาชิก</h2>
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

export default EditForm;

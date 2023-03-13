import React from 'react';

const EditButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-amber-400 border-amber-400 hover:text-amber-400">แก้ไขข้อมูล</button>
  );
}

export default EditButton;

import React from 'react';

const AddButton = ({ onClick }) => {
  return (
    <button className = " top-0 right-0 m-4 hover:bg-white hover:text-indigo-700" onClick={onClick}>เพิ่มสมาชิก </button>
  );
}

export default AddButton;

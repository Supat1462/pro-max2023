import React from 'react';


const ViewButton = ({ onClick }) => {
    
  return (
    <button onClick={onClick} className="bg-green-600 border-green-700 hover:text-green-700">แสดงข้อมูล</button>
  );
}

export default ViewButton;

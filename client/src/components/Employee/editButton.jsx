import React from 'react';

const EditButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-amber-200 border-amber-200 hover:text-amber-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d38400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>
    </button>
  );
}

export default EditButton;

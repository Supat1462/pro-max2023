import React from 'react';


const ViewButton = ({ onClick }) => {

  return (
    <button onClick={onClick} className="bg-green-300 border-green-300 hover:text-green-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#007008" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
    </button>
  );
}

export default ViewButton;

import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import EditButton from './editButton';
import EditForm from './editFrom';
import ViewButton from './ViewButton';
import ViewFrom from './ViewFrom';



const DataTableEmployee = () => {

  // 
  const [showModal, setShowModal] = useState(false);
  const [ViewModal, setViewModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);


  const handleViewClick = (val) => {
    setSelectedEmployee(val);
    setViewModal(true);
    console.log('setselect',selectedEmployee)
  }

  const handleEditClick = (val) => {
    setSelectedEmployee(val);
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }

  const handleViewModalClose = () => {
    setViewModal(false);
  }


  // Array Employee
  const [employeeList, setEmployeeList] = useState([]);


  // button delete employeeList
  const deleteEmployee = (id) => {
    // console.log(id);
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id;
        })
      )
    })
    alert('ลบข้อมูลพนักงานเรียบร้อยแล้ว');
  }



  // show data table employee

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/employee")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setEmployeeList(result);
          // console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (

    <div className="overflow-x-auto mt-5">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className='sm1:text-xs lg:text-sm '>
            <th className="px-4 py-2 bg-gray-800 text-gray-100 rounded-tl-lg">ลำดับ</th>
            <th className="px-4 py-2 bg-gray-800 text-gray-100">รหัสพนักงาน</th>
            <th className="px-4 py-2 bg-gray-800 text-gray-100">ชื่อพนักงาน</th>
            <th className="px-4 py-2 bg-gray-800 text-gray-100">แผนก</th>
            <th className="px-4 py-2 bg-gray-800 text-gray-100">สำนักงาน</th>
            <th className="px-4 py-2 bg-gray-800 text-gray-100">สถานะ</th>
            <th className="px-4 py-2 bg-gray-800 text-gray-100 rounded-tr-lg">แก้ไขข้อมูล</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {employeeList.map((val, index, row) => {
            return (
              <tr
              className='sm1:text-xs lg:text-sm border-2'
              key={row.IDEmployee}>
                <td className='boder px-2 py-2'>{index + 1}</td>
                <td className='boder px-4 py-2'>{val.IDEmployee}</td>
                <td className='boder px-4 py-2'>{val.name}</td>
                <td className='boder px-4 py-2'>{val.department}</td>
                <td className='boder px-4 py-2'>{val.location}</td>
                <td className='boder px-4 py-2'>{val.StatusEmployee}</td>
                <td className='boder py-2 flex justify-center gap-1'>
                  <td>
                    <ViewButton onClick={() => handleViewClick(val)} />
                  </td>
                  <td>
                    <EditButton onClick={() => handleEditClick(val)} />
                  </td>

                  <button className='bg-red-700 hover:text-red-700 border-red-700' onClick={() => { deleteEmployee(val.id) }}>ลบข้อมูล</button>
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>
      {showModal && (
        <EditForm employee={selectedEmployee} onClose={handleModalClose} />
      )}


      {ViewModal && (
        <ViewFrom employee={selectedEmployee} onClose={handleViewModalClose} />
      )}



    </div>
  )
    ;
};


export default DataTableEmployee;

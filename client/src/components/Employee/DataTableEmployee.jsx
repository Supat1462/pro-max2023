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


  // ********************** start page current ********************* //




  // ********************** end page current *********************** //

  // ********************* start button **************************** //
  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true);
  }

  const handleViewClick = (employee) => {
    setSelectedEmployee(employee);
    setViewModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }

  const handleViewModalClose = () => {
    setViewModal(false);
  }
  // ******************** end button ***************************** //

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
      .then((data) => {
        // Sort employee list by IDEmployee
        data.sort((a, b) => a.IDEmployee - b.IDEmployee);
        setEmployeeList(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);



  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (

    <div className="overflow-x-auto mt-5">
      <p className='mb-3'>พบข้อมูลพนักงาน  รายการ</p>

      <table className="w-full border-spacing-2">
        <thead>
          <tr className='sm1:text-xs lg:text-sm '>
            <th className="px-4 py-2 bg-gray-800 text-gray-100 rounded-tl-lg w-5">ลำดับ</th>
            <th className="px-4 py-2 bg-gray-800 text-gray-100">รหัสพนักงาน</th>
            <th className="px-4 py-2 bg-gray-800 text-gray-100">ชื่อพนักงาน</th>
            <th className="px-4 py-2 bg-gray-800 text-gray-100">แผนก</th>
            <th className="px-4 py-2 bg-gray-800 text-gray-100">สำนักงาน</th>
            <th className="px-4 py-2 bg-gray-800 text-gray-100">สถานะ</th>
            <th className="px-4 py-2 bg-gray-800 text-gray-100 rounded-tr-lg">แก้ไขข้อมูล</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {employeeList.map((val, index) => {

            return (
              <tr
                className='sm1:text-xs lg:text-sm border-2'
                key={val.IDEmployee}>
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

                  <button className='bg-red-200 hover:text-red-200 border-red-200' onClick={() => { deleteEmployee(val.id) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d0021b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>

      </table >

      {/* ***************** modals ****************************** */}
      {
        showModal && (
          <EditForm employee={selectedEmployee} onClose={handleModalClose} />
        )
      }


      {
        ViewModal && (
          <ViewFrom employee={selectedEmployee} onClose={handleViewModalClose} />
        )
      }
      {/* ******************* end modals ********************** */}


    </div >
  )
    ;
};


export default DataTableEmployee;

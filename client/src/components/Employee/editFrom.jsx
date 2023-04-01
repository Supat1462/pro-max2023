import React, { useState } from 'react';
import axios from 'axios';

const EditForm = ({ employee, onClose }) => {
  const [name, setName] = useState(employee.name);
  const [IDEmployee, setIDEmployee] = useState(employee.IDEmployee);
  const [department, setdepartment] = useState(employee.department);
  const [location, setlocation] = useState(employee.location);
  const [StatusEmployee, setStatusEmployee] = useState(employee.StatusEmployee);


  // console.log('ttttttt', employee)
  const handleUpdate = (event) => {
    event.preventDefault();
    const id = employee.id
    const updatedEmployee = {
      IDEmployee: IDEmployee,
      name: name,
      department: department,
      location: location,
      StatusEmployee: StatusEmployee,

    };

    // console.log(updatedEmployee.id);

    axios.put(`http://localhost:3001/employee/${id}`, updatedEmployee)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
    onClose();

    alert('แก้ไขข้อมูลพนักงานเรียบร้อยแล้ว');
  };

  const handleClose = () => {
    onClose();
  };


  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 relative lg:w-2/3 sm1:w-screen sm1:m-3">
        <button className="absolute top-0 right-0 m-4 hover:bg-white hover:text-indigo-700" onClick={handleClose}>
          <svg
            className="w-6 h-6 text-whit"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>


        <div className="mt-10 sm:mt-0">
          <h2 className="lg:text-2xl sm1:text-xl mb-4 text-indigo-700 font-bold">แก้ไขข้อมูลพนักงาน</h2>
          <form onSubmit={handleUpdate}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="id-employee" className="block text-sm font-medium text-gray-700">
                      รหัสพนักงาน
                    </label>
                    <input
                      type="text"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={IDEmployee}
                      onChange={e => {
                        setIDEmployee(e.target.value)
                        // console.log('IDEmployee', IDEmployee)
                      }}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name-employee" className="block text-sm font-medium text-gray-700">
                      ชื่อ - นามสกุล
                    </label>
                    <input
                      type="text"
                      value={name}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={e => {
                        setName(e.target.value)
                        // console.log('NameEmy', name)
                      }}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                      แผนก
                    </label>
                    <select
                      id="department"
                      name="department"
                      value={department}
                      autoComplete="department-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={(event) => {
                        setdepartment(event.target.value)
                      }}
                    >
                      <option value={"default"}>--โปรดเลือกแผนกพนักงาน--</option>
                      <option value="Accounting & Finacial">Accounting and Finance</option>
<<<<<<< HEAD
                      <option value="HR">HR</option>
                      <option value="IT">IT</option>
=======
                      <option value="Human Resources">Human Resources</option>
                      <option value="Information Technology">Information Technology</option>
>>>>>>> parent of 80f1eec7 (16/3)
                      <option value="Managment">Managment</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Operation">Operation</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                      สำนักงาน
                    </label>
                    <select
                      id="location"
                      name="location"
                      autoComplete="location-name"
                      value={location}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={(event) => {
                        setlocation(event.target.value)
                      }}
                    >
                      <option value="default">--โปรดเลือกสำนักงาน--</option>
                      <option value="ฟอร์รั่ม ทาวน์เวอร์">ฟอร์รั่ม ทาวน์เวอร์</option>
                      <option value="ลาซาล">ลาซาล</option>
                      <option value="ขอนแก่น">ขอนแก่น</option>
                      <option value="นครสววรค์">นครสววรค์</option>
                      <option value="บางวัว">บางวัว</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="StatusEmployee" className="block text-sm font-medium text-gray-700">
                      สถานะ
                    </label>
                    <select

                      id="StatusEmployee"
                      name="StatusEmployee"
                      value={StatusEmployee}
                      autoComplete="StatusEmployee-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={(event) => {
                        setStatusEmployee(event.target.value)

                      }}
                    >
                      <option value="default">--โปรดเลือกสถานะ--</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="On Leave">On Leave</option>
                    </select>
                    <p>Selected employee status: {StatusEmployee}</p>
                  </div>

                  <div className="col-span-6 sm:col-span-6 gap-3">
                    <button className='mr-3 bg-indigo-700 border-indigo-700 hover:text-indigo-700' type='submit'>บันทึกข้อมูล</button>
                    <button
                      onClick={onClose}
                      className="bg-red-700 border-red-700 hover:text-red-700"
                    >ยกเลิก</button>
                  </div>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditForm;

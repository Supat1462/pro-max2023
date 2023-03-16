import React, { useState } from 'react';
import axios from 'axios';

const EditForm = ({ data, onClose }) => {
  const [NameTH, setNameTH] = useState(data.NameTH);
  const [SurnameTH, setSurnameTH] = useState(data.SurnameTH);
  const [Emp_Code, setEmp_Code] = useState(data.Emp_Code);
  const [Nickname, setNickname] = useState(data.Nickname);
  const [Department, setDepartment] = useState(data.Department);
  const [Branch, setBranch] = useState(data.Branch);
  const [Status, setStatus] = useState(data.Status);


  // console.log('ttttttt', data)
  const handleUpdate = (event) => {
    event.preventDefault();
    const id = data.id
    const updatedEmployee = {
      Emp_Code: Emp_Code,
      NameTH: NameTH,
      SurnameTH: SurnameTH,
      Nickname: Nickname,
      Department: Department,
      Branch: Branch,
      Status: Status,

    };

    // console.log(updatedEmployee.id);

    axios.put(`http://localhost:3001/table_name/${id}`, updatedEmployee)
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


        <div className="">
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
                      value={Emp_Code}
                      onChange={e => {
                        setEmp_Code(e.target.value)
                        // console.log('IDEmployee', IDEmployee)
                      }}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name-employee" className="block text-sm font-medium text-gray-700">
                      ชื่อ
                    </label>
                    <input
                      type="text"
                      value={NameTH}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={e => {
                        setNameTH(e.target.value)
                        // console.log('NameEmy', name)
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name-employee" className="block text-sm font-medium text-gray-700">
                      นามสกุล
                    </label>
                    <input
                      type="text"
                      value={SurnameTH}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={e => {
                        setSurnameTH(e.target.value)
                        // console.log('NameEmy', name)
                      }}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name-employee" className="block text-sm font-medium text-gray-700">
                      ชื่อเล่น
                    </label>
                    <input
                      type="text"
                      value={Nickname}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      onChange={e => {
                        setNickname(e.target.value)
                        // console.log('NameEmy', name)
                      }}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="Department" className="block text-sm font-medium text-gray-700">
                      แผนก
                    </label>
                    <select
                      id="Department"
                      name="Department"
                      value={Department}
                      autoComplete="Department-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={(event) => {
                        setDepartment(event.target.value)
                      }}
                    >
                      <option value="default">--โปรดเลือกแผนกพนักงาน--</option>
                      <option value="Accounting & Finance">Accounting & Finance</option>
                      <option value="Human Resource">Human Resource</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Management">Management</option>
                      <option value="Business Unit">Business Unit</option>
                      <option value="Operation">Operation</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="Branch" className="block text-sm font-medium text-gray-700">
                      สำนักงาน
                    </label>
                    <select
                      id="Branch"
                      name="Branch"
                      autoComplete="Branch-name"
                      value={Branch}
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={(event) => {
                        setBranch(event.target.value)
                      }}
                    >
                      <option value="default">--โปรดเลือกสำนักงาน--</option>
                      <option value="Forum Tower">Forum Tower</option>
                      <option value="Lasalle">Lasalle</option>
                      <option value="Khonkaen">Khonkaen</option>
                      <option value="Nakhon Sawan">Nakhon Sawan</option>
                      <option value="Chonburi">Chonburi</option>
                      <option value="Rayong">Rayong</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="Status" className="block text-sm font-medium text-gray-700">
                      สถานะ
                    </label>
                    <select

                      id="Status"
                      name="Status"
                      value={Status}
                      autoComplete="Status-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={(event) => {
                        setStatus(event.target.value)

                      }}
                    >
                      <option value="default">--โปรดเลือกสถานะ--</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="On Leave">On Leave</option>
                    </select>
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

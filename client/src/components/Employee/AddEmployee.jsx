import Axios from 'axios';
import { useState } from 'react';


function AddEmployee() {

    // Date
    const date = new Date();

    // Array AddEmployee
    const [employeeList, setEmployeeList] = useState([]);

    const [IDEmployee, setIDEmployee] = useState('');
    const [name, setname] = useState('');
    const [department, setdepartment] = useState('');
    const [location, setlocation] = useState('');
    const [StatusEmployee, setStatusEmployee] = useState('');

    const addEmployee = () => {
        Axios.post('http://localhost:3001/create', {
            name: name,
            IDEmployee: IDEmployee,
            department: department,
            location: location,
            StatusEmployee: StatusEmployee,
        }).then(() => {
            setEmployeeList([
                ...employeeList,
                {
                    name: name,
                    IDEmployee: IDEmployee,
                    department: department,
                    location: location,
                    StatusEmployee: StatusEmployee,
                }
            ])
        })
        alert('เพิ่มข้อมูลพนักงานเรียบร้อยแล้ว');
    }

    return (
        <div>
            <div className="px-4 py-5 sm:px-6">
                <h3 className="lg:text-2xl sm1:text-xl mb-4 text-indigo-700 font-bold">เพิ่มมูลพนักงาน</h3>
            </div>
            <form>
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="id-employee" className="block text-sm font-medium text-gray-700">
                                    รหัสพนักงาน
                                </label>
                                <input
                                    type="text"
                                    name="id-employee"
                                    id="id-employee"
                                    autoComplete="given-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                    onChange={(event) => {
                                        setIDEmployee(event.target.value)
                                    }}
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name-employee" className="block text-sm font-medium text-gray-700">
                                    ชื่อ - นามสกุล
                                </label>
                                <input
                                    type="text"
                                    name="name-employee"
                                    id="name-employee"
                                    autoComplete="family-name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    required
                                    onChange={(event) => {
                                        setname(event.target.value)
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
                                    defaultValue={"default"}
                                    autoComplete="department-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    onChange={(event) => {
                                        setdepartment(event.target.value)
                                    }}
                                >
                                    <option value={"default"}>--โปรดเลือกแผนกพนักงาน--</option>
                                    <option value="Accounting & Finacial">Accounting and Finance</option>
                                    <option value="HR">HR</option>
                                    <option value="IT">IT</option>
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
                                    defaultValue={"default"}
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
                                    defaultValue={"default"}
                                    autoComplete="StatusEmployee-name"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    onChange={(event) => {
                                        setStatusEmployee(event.target.value)
                                    }}
                                >
                                    <option value="">--Please select an option--</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="On Leave">On Leave</option>
                                </select>
                                <p>Selected employee status: {StatusEmployee}</p>
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                                <p className="text-gray-500">
                                    วันที่ : {date.toLocaleDateString("en-US")}
                                </p>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <button className="text-white font-bold py-2px-4 rounded sm1:text-sm hover:border" onClick={addEmployee}>
                                    เพิ่มข้อมูล
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default AddEmployee
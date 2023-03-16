import Axios from 'axios';
import { useState } from 'react';


function AddEmployee() {

    // Date
    const date = new Date();

    // Array AddEmployee
    const [employeeList, setEmployeeList] = useState([]);

    const [Emp_Code, setEmp_Code] = useState('');
    const [NameTH, setNameTH] = useState('');
    const [SurnameTH, setSurnameTH] = useState('');
    const [Nickname, setNickname] = useState('');
    const [Department, setDepartment] = useState('');
    const [Branch, setBranch] = useState('');
    const [Status, setStatus] = useState('');

    const addEmployee = () => {
        Axios.post('http://localhost:3001/create', {
            NameTH: NameTH,
            SurnameTH: SurnameTH,
            Nickname: Nickname,
            Emp_Code: Emp_Code,
            Department: Department,
            Branch: Branch,
            Status: Status,
        }).then(() => {
            setEmployeeList([
                ...employeeList,
                {
                    NameTH: NameTH,
                    SurnameTH: SurnameTH,
                    Nickname: Nickname,
                    Emp_Code: Emp_Code,
                    Department: Department,
                    Branch: Branch,
                    Status: Status,
                }
            ])
        })
        alert('เพิ่มข้อมูลพนักงานเรียบร้อยแล้ว');
    }

    return (
        <div>
            <div className="">
                <h3 className="lg:text-2xl sm1:text-xl mb-4 text-indigo-700 font-bold">เพิ่มมูลพนักงาน</h3>
            </div>
            <form>
                <div className="overflow-hidden grid gap-6 mb-6 md:grid-cols-6 shadow sm:rounded-md p-5">
                    <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="id-employee" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
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
                                setEmp_Code(event.target.value)
                            }}
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="name-employee" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            ชื่อ
                        </label>
                        <input
                            type="text"
                            name="name-employee"
                            id="name-employee"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                            onChange={(event) => {
                                setNameTH(event.target.value)
                            }}
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="name-employee" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            นามสกุล
                        </label>
                        <input
                            type="text"
                            name="name-employee"
                            id="name-employee"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                            onChange={(event) => {
                                setSurnameTH(event.target.value)
                            }}
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="name-employee" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            ชื่อเล่น
                        </label>
                        <input
                            type="text"
                            name="name-employee"
                            id="name-employee"
                            autoComplete="family-name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                            onChange={(event) => {
                                setNickname(event.target.value)
                            }}
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="Department" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            แผนก
                        </label>
                        <select
                            id="Department"
                            name="Department"
                            value={Department}
                            defaultValue={"default"}
                            autoComplete="Department"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            onChange={(event) => {
                                setDepartment(event.target.value)
                            }}
                        >
                            <option value="default">--โปรดเลือกแผนก--</option>
                            <option value="Accounting & Finacial">Accounting & Finacial</option>
                            <option value="Human Resources">Human Resources</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Managment">Managment</option>
                            <option value="Business Unit">Business Unit</option>
                            <option value="Operation">Operation</option>
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                        <label htmlFor="Branch" className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            สาขา
                        </label>
                        <select
                            id="Branch"
                            name="Branch"
                            autoComplete="Branch"
                            value={Branch}
                            defaultValue={"default"}
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            onChange={(event) => {
                                setBranch(event.target.value)
                            }}
                        >
                            <option value="default">--โปรดเลือกสาขา--</option>
                            <option value="Forum Tower">Forum Tower</option>
                            <option value="Lasalle">Lasalle</option>
                            <option value="Khonkaen">Khonkaen</option>
                            <option value="Nakhon Sawan">Nakhon Sawan</option>
                            <option value="Chonburi">Chonburi</option>
                            <option value="Rayong">Rayong</option>
                        </select>
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="StatusEmployee" className="block text-sm font-medium text-gray-700">
                            สถานะ
                        </label>
                        <select
                            id="StatusEmployee"
                            name="StatusEmployee"
                            value={Status}
                            defaultValue={"default"}
                            autoComplete="Status"
                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            onChange={(event) => {
                                setStatus(event.target.value)
                            }}
                        >
                            <option value="">--โปรดเลือกสถานะ--</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="On Leave">On Leave</option>
                        </select>
                        
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
            </form>
        </div>
    )
}

export default AddEmployee
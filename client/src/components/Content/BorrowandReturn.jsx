import React from 'react'
import SearchBox from './SearchBox';
import BorrowData from './BorrowData';

function BorrowandReturn() {

    const data = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Kiwi'];

    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 container mt-5 shadow-md rounded-lg py-5">
            <div className="header">
                <h1 className="lg:text-3xl font-bold text-indigo-700 sm1:text-xl sm1:px-4">Borrow and Return</h1>
                <hr className='my-3' />
            </div>

            <div className="">
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                        <div className="shadow sm:overflow-hidden sm:rounded-md">
                            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                <h2 className='font-bold text-gray-700 lg:text-lg sm1:text-base'>ข้อมูล ยืม - คืน อุปกรณ์</h2>
                                <hr className='my-3' />
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="company-website" className="block lg:text-base font-medium text-gray-700 mb-2 sm1:text-sm">
                                            รหัสพนักงาน / ชื่อ - นามสกุล
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            <button className='mt-3 sm1:text-sm'>ตกลง</button>
                                        </div>
                                    </div>
                                    <div className="col-span-3 sm:col-span-2">
                                        <SearchBox placeholder="ตัวอย่าง : SN123456789000" data={data} />
                                        <button className='mt-3 sm1:text-sm'>ตกลง</button>
                                    </div>
                                </div>
                                <hr className='my-4' />
                                <BorrowData />
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BorrowandReturn
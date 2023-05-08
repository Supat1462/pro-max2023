import React from 'react';
import { AiFillSetting } from "react-icons/ai";


const links = [
    {name: 'Branch', href: ''}
]


function Setting() {



    return (
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 container mt-5 shadow-md rounded-lg py-5 mb-10'>

            <div className="items-center">
                <span className='lg:text-3xl font-bold text-indigo-700 sm1:text-2xl py-2 items-center flex gap-2'>ตั้งค่า (Settings)
                    <AiFillSetting className="h-7 w-7" />
                </span>
            </div>
            <hr />
            
        </div>
    )
}

export default Setting
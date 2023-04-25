import React from 'react'
import Brand from './Brand'

function Setting() {
    return (
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 container mt-5 shadow-md rounded-lg py-5 mb-10'>

            <div className="heder">
                <h1 className='lg:text-3xl font-bold text-indigo-700 sm1:text-2xl sm1:px-4'>Setting</h1>
                <hr className='my-3' />
            </div>


            <div className="">
                <Brand />
            </div>
        </div>
    )
}

export default Setting
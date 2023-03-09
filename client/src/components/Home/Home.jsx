import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    
    <main className='transition ease-in-out delay-150'>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Borrow and Return Device System
            </h1>
            <h2 className='mt-6 text-3xl font-bold text-orange-400 sm:text-4xl'>KDR Transport</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
             จัดทำขึ้นเพื่อเก็บประวัติการยืม - คืน อุปกรณ์ฝ่ายไอทีของพนักงานบริษัท
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/BorrowandReturn"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link to='/BorrowandReturn' className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
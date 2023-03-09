import Table from "./Table";

export default function BorrowData() {

  const data = [
    {
      numBorrow: '1',
      email: 'john.doe@example.com',
      phone: '555-555-1234',
    },
    {
      numBorrow: '2',
      email: 'jane.doe@example.com',
      phone: '555-555-5678',
    },
    {
      numBorrow: '3',
      email: 'bob.smith@example.com',
      phone: '555-555-9012',
    },
  ];

  return (
    <div className="shadow-xl">
      <div className="pb-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">ข้อมูลพนักงาน</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">รหัสพนักงาน</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">ชื่อ - นามสกุล</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">แผนก</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">margotfoster@BorrowData.com</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">สำนักงาน</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Forum Tonwer
            </dd>
          </div>
        </dl>

        <div className="py-5 font-bold text-lg text-indigo-700">
          ข้อมูลการยืมอุปกรณ์
        </div>
      </div>
      <Table data={data} />
    </div>
  )
}

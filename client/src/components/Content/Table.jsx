import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto shadow-lg">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-indigo-700 text-gray-100 sm1:text-sx lg:text-base">ลำดับที่</th>
            <th className="px-4 py-2 bg-indigo-700 text-gray-100 sm1:text-sx lg:text-base">รหัสอุปกรณ์</th>
            <th className="px-4 py-2 bg-indigo-700 text-gray-100 sm1:text-sx lg:text-base">ชื่ออุปกรณ์</th>
            <th className="px-4 py-2 bg-indigo-700 text-gray-100 sm1:text-sx lg:text-base">ยี่ห้อ</th>
            <th className="px-4 py-2 bg-indigo-700 text-gray-100 sm1:text-sx lg:text-base">แก้ไข</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.numBorrow}</td>
              <td className="border px-4 py-2">{item.email}</td>
              <td className="border px-4 py-2">{item.phone}</td>
              <td className="border px-4 py-2">{item.phone}</td>
              <td className="border px-4 py-2">{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function StudentCard({ obj }) {
  const { id, code, name } = obj;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const sum = orders
      .filter(o => o.student === id)
      .reduce((acc, cur) => acc + cur.total, 0);

    setTotal(sum);
  }, [id]);

  return (
    <div className="w-full sm:w-64">
      <div className="bg-white rounded-3xl shadow-md p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-100">
        
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {name}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Code: <span className="text-green-700 font-medium">{code}</span>
        </p>

        <div className="mt-3 bg-red-50 rounded-xl p-2 text-center">
          <p className="text-sm text-gray-500">Total Spend</p>
          <p className="text-lg font-bold text-red-600">₹{total}</p>
        </div>

        <Link
          to={`/students/${id}`}
          className="block mt-4 text-center w-full bg-green-800 text-white py-2 rounded-xl font-medium tracking-wide hover:opacity-90 active:scale-95 transition-all duration-200"
        >
          View Details
        </Link>

      </div>
    </div>
  )
}

export default StudentCard;
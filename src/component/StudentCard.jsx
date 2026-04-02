import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function StudentCard({obj}) {
    console.log(obj);
    const {id, code, name} = obj;
    const [total, setTotal] = useState(0);


  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const sum = orders
      .filter(o => o.student === id)
      .reduce((acc, cur) => acc + cur.total, 0);

    setTotal(sum);
  }, [id]);

  return (
   <div>
    <div className='bg-white  rounded-2xl shadow-md p-4 w-64  hover:shadow-xl'>
    <h3 className="text-lg font-bold text-gray-800">{name}</h3>
    <p className=" text-green-800 font-medium">Code: {code}</p>
    <p className='text-red-600 text-lg mb-2'>Total Spend : Rs.{total}</p>

    <Link 
    to={`/students/${id}`}
    className="mt-4 bg-green-800  text-white py-1.5 px-2 rounded-lg " >Student Details</Link>
    </div>
   </div>
  )
}

export default StudentCard

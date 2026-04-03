import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function StudentDetails() {
  const { id } = useParams();

  const [student, setStudent] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const ordersData = JSON.parse(localStorage.getItem("orders")) || [];

    const studentId = Number(id);

    const s = students.find((item) => item.id === studentId);
    setStudent(s);

    const myOrders = ordersData.filter((o) => o.student === studentId);
    setOrders(myOrders);
  }, [id]);

  const total = orders.reduce((a, b) => a + b.total, 0);

  if (!student) {
    return <p className="p-4 text-center text-gray-500">Student not found</p>;
  }

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">

      <div className="bg-white p-5 rounded-3xl shadow-md mb-6 transition-all hover:shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800">{student.name}</h2>
        <p className="text-sm text-gray-500 mt-1">
          Code: <span className="text-green-700 font-medium">{student.code}</span>
        </p>

        <div className="mt-4 bg-red-50 rounded-xl p-3 text-center">
          <p className="text-sm text-gray-500">Total Spend</p>
          <p className="text-xl font-bold text-red-600">₹{total}</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
          Orders
        </h3>

        <Link
          to="/"
          className="text-sm text-blue-700 font-medium hover:underline"
        >
          ← Back
        </Link>
      </div>

      {orders.length === 0 ? (
        <p className="text-gray-500 text-center mt-6">No orders yet</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {orders.map((o, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              <p className="font-medium text-gray-800">
                {o.itemName}
              </p>

              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>Qty: {o.quantity}</span>
                <span className="font-semibold text-green-700">
                  ₹{o.total}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentDetails;
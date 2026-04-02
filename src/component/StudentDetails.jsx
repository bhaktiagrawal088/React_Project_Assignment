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
    return <p className="p-4">Student not found</p>;
  }

  return (
    <div className="p-6">

      <div className="bg-white p-4 rounded-xl shadow-md mb-6 w-80">
        <h2 className="text-xl font-bold">{student.name}</h2>
        <p className="text-green-600 font-semibold mt-2">Code: {student.code}</p>
        <p className="text-red-600 font-semibold mt-2">
          Total Spend: ₹{total}
        </p>
      </div>

      <h3 className="text-lg font-semibold mb-3">Orders</h3>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        <div className="flex flex-col gap-3">
          {orders.map((o , index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-lg">
              <p>Snack: {o.itemName}</p>
              <p>Quantity: {o.quantity}</p>
              <p>Amount: ₹{o.total}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default StudentDetails;
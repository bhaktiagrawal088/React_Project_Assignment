import { useState } from "react";

function OrderForm({ itemName, price, students = [], onClose }) {
    const [student, setStudent] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      id: Date.now(),
      itemName,
      student :  Number(student),
      quantity,
      total : price * quantity
    };

    // console.log("Order Placed:", orderData);
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(orders));

    onClose();

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      
      <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
        
        <h2 className="text-lg font-bold mb-4">
          Order: {itemName}  - Rs.{price}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          
          <select
            className="border p-2 rounded"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            required
          >
            <option value="">Select Student</option>
            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>

          <select
            className="border p-2 rounded"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>

          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Order
            </button>
          </div>

        </form>
      </div>

    </div>
  );
}

export default OrderForm;
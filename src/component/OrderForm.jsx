import { useState, useEffect } from "react";

function OrderForm({ itemName, price, students = [], onClose }) {
  const [student, setStudent] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      id: Date.now(),
      itemName,
      student: Number(student),
      quantity,
      total: price * quantity,
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(orderData);
    localStorage.setItem("orders", JSON.stringify(orders));

    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-[90%] max-w-sm p-6 rounded-2xl shadow-2xl transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          {itemName}
        </h2>

        <p className="text-center text-green-700 font-medium mb-4">
          Price: ₹{price}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <div>
            <label className="text-sm text-gray-600">Select Student</label>
            <select
              className="w-full border mt-1 p-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              value={student}
              onChange={(e) => setStudent(e.target.value)}
              required
            >
              <option value="">Choose...</option>
              {students.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Quantity</label>
            <select
              className="w-full border mt-1 p-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-between gap-3 mt-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
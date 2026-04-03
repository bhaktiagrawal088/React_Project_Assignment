import { useState } from "react";
import OrderForm from "./OrderForm";

function SnackCard(props) {
  const [showForm, setShowForm] = useState(false);

  const { obj } = props;
  const { name, caloriesPerServing, image } = obj;

  return (
    <div className="bg-blue-100 rounded-3xl shadow-md p-4 w-full sm:w-60 transition-all duration-300 hover:shadow-2xl">
      
      <div className="overflow-hidden rounded-xl">
        <img
          className="w-full h-40 sm:h-32 object-cover hover:scale-105 transition-transform duration-300"
          src={image}
          alt={name}
        />
      </div>

      <div className="mt-3">
        <h3 className="font-semibold text-lg text-gray-800 truncate">
          {name}
        </h3>

        <h2 className="text-green-600 font-bold text-md mt-1">
          ₹{Math.round(caloriesPerServing / 2)}
        </h2>
      </div>

      <button
        className="mt-4 w-full bg-blue-800 text-white py-2 rounded-xl font-medium tracking-wide hover:opacity-90 active:scale-95 transition-all duration-200"
        onClick={() => setShowForm(true)}
      >
        Order Now
      </button>

      {showForm && (
        <OrderForm
          itemName={name}
          price={Math.round(caloriesPerServing / 2)}
          students={JSON.parse(localStorage.getItem("students")) || []}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default SnackCard;
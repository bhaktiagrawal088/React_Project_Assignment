import { useState } from "react";
import OrderForm from "./OrderForm";

function SnackCard(props) {
  // console.log(props);

  const [showForm, setShowForm] = useState(false);

  const {obj} = props;

  const{name,caloriesPerServing, image} = obj;
  
  return (
    <div className=" bg-white rounded-2xl shadow-md p-4 w-60 hover:shadow-xl">
    <img 
    className="w-full h-32 object-cover rounded-lg"
    src={image}/>
    <h3 className="mt-2 font-semibold text-lg text-gray-800">{name}</h3>
    <h2 className="text-green-600 font-bold text-md">Rs.{caloriesPerServing / 2}</h2>
    <button
     className="mt-3 bg-blue-800 text-white py-1 px-2 rounded-lg"
    onClick={() => setShowForm(true)}>Order</button>

    {showForm && <OrderForm itemName={name} 
     price={Math.round(caloriesPerServing / 2)}
    students={JSON.parse(localStorage.getItem("students")) || []}
      onClose={() => setShowForm(false)} 
    />}
    </div>
  )
}

export default SnackCard

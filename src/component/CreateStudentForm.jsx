import { useState, useEffect } from "react";

function CreateStudentForm({ onClose , addStudent }) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    const code = "REF" + Math.floor(1000 + Math.random() * 9000);
    setCode(code);
  }, []);

  const createStudent = () => {

    if (!name.trim()) return;

    const newstudent = {
      id : Date.now(),
      name, 
      code,
    }
  
    const data = JSON.parse(localStorage.getItem("students")) || [];
    data.push(newstudent);
    localStorage.setItem("students", JSON.stringify(data));
    addStudent(newstudent);
    onClose();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      
      <div className="bg-white p-6 rounded-xl w-80 shadow-lg">
        
        <h2 className="text-xl font-bold mb-4">Create Student</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />

        <p className="mb-3">
          Referral Code: <span className="font-bold">{code}</span>
        </p>

        <div className="flex justify-end gap-2">
          <button
            className="bg-red-600 text-white px-3 py-1 rounded"
            onClick={onClose}
          >
            Cancel
          </button>

          <button 
          className="bg-blue-600 text-white px-3 py-1 rounded"
          onClick={createStudent}>
            Create
          </button>
        </div>

      </div>
    </div>
  );
}

export default CreateStudentForm;
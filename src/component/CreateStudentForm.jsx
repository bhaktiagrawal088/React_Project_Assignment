import { useState, useEffect } from "react";

function CreateStudentForm({ onClose, addStudent }) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    const generatedCode = "REF" + Math.floor(1000 + Math.random() * 9000);
    setCode(generatedCode);
  }, []);

  const createStudent = () => {
    if (!name.trim()) return;

    const newStudent = {
      id: Date.now(),
      name,
      code,
    };

    const data = JSON.parse(localStorage.getItem("students")) || [];
    data.push(newStudent);
    localStorage.setItem("students", JSON.stringify(data));

    addStudent(newStudent);
    onClose();
  };

  return (
    <div
      className="fixed inset-0  flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white w-[90%] max-w-sm p-6 rounded-2xl shadow-2xl transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
          Create Student
        </h2>

        <div className="mb-4">
          <label className="text-sm text-gray-600">Student Name</label>
          <input
            type="text"
            placeholder="Enter name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="bg-gray-50 rounded-lg p-3 text-center mb-4">
          <p className="text-sm text-gray-500">Referral Code</p>
          <p className="text-lg font-bold text-blue-600">{code}</p>
        </div>

        <div className="flex gap-3">
          <button
            className="w-full py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            onClick={createStudent}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateStudentForm;
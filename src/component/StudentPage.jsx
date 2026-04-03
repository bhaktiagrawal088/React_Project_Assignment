import React, { useEffect, useState } from 'react'
import StudentCard from './StudentCard';
import CreateStudentForm from './CreateStudentForm';

function StudentPage() {

    const [Form, setForm] = useState(false);
    const [students, setStudents] = useState([]);


   useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("students"));
    setStudents(stored);
  }, []);

  const handleAddStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async() => {

    const local = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(local); 
    
  }
  return (
     <div className="p-4">
    
    <button
    onClick={() => setForm(true)}
     className="mb-4 bg-orange-800 font-bold text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">

      + Create Student
    </button>

    <div className="flex flex-wrap gap-6 justify-center">
      {students.map((user) => (
        <StudentCard key={user.id} obj={user} />
      ))}
    </div>

    {Form && <CreateStudentForm 
    onClose={() => setForm(false)}
    addStudent={handleAddStudent}
     />}


  </div>
  )
}

export default StudentPage

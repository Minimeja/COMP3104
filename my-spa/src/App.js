import React, { useState } from 'react';
import './App.css';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <h1>Student Information System</h1>
      <h5>Developed By: 100516804 || Minilik Meja || DevOps Lab 05</h5>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;

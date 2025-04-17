import StudentForm from '../components/StudentForm';
import StudentTable from '../components/StudentTable';
import { useEffect, useState } from 'react';
import axios from 'axios';

const api = 'http://localhost:5000/api/students';

export default function Home() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get(api);
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSave = async (student) => {
    if (student.id) {
      await axios.put(`${api}/${student.id}`, student);
    } else {
      await axios.post(api, student);
    }
    setEditingStudent(null);
    fetchStudents();
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${api}/${id}`);
    fetchStudents();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <StudentForm onSave={handleSave} student={editingStudent} />
      <div className="lg:col-span-2">
        <StudentTable students={students} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
}

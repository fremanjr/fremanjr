import { useEffect, useState } from 'react';

export default function StudentForm({ onSave, student }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    class: '',
    age: '',
    gender: '',
    photo: ''
  });

  useEffect(() => {
    if (student) setForm(student);
    else setForm({ name: '', email: '', class: '', age: '', gender: '', photo: '' });
  }, [student]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">{form.id ? 'Edit' : 'Add'} Student</h2>

      <input name="name" value={form.name} onChange={handleChange} placeholder="Name"
        className="w-full p-2 border rounded" required />

      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email"
        className="w-full p-2 border rounded" required />

      <input name="class" value={form.class} onChange={handleChange} placeholder="Class"
        className="w-full p-2 border rounded" required />

      <input name="age" type="number" value={form.age} onChange={handleChange} placeholder="Age"
        className="w-full p-2 border rounded" required />

      <select name="gender" value={form.gender} onChange={handleChange}
        className="w-full p-2 border rounded" required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input name="photo" value={form.photo} onChange={handleChange} placeholder="Photo URL"
        className="w-full p-2 border rounded" />

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        {form.id ? 'Update' : 'Save'}
      </button>
    </form>
  );
}

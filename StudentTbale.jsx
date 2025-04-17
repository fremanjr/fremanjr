export default function StudentTable({ students, onEdit, onDelete }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">📋 Student List</h2>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">#</th>
            <th className="p-2">Photo</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Class</th>
            <th className="p-2">Age</th>
            <th className="p-2">Gender</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={s.id} className="border-t">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">
                {s.photo ? <img src={s.photo} alt="Student" className="w-10 h-10 rounded-full" /> : '—'}
              </td>
              <td className="p-2">{s.name}</td>
              <td className="p-2">{s.email}</td>
              <td className="p-2">{s.class}</td>
              <td className="p-2">{s.age}</td>
              <td className="p-2">{s.gender}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => onEdit(s)}
                  className="px-2 py-1 bg-yellow-400 rounded text-white hover:bg-yellow-500"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => onDelete(s.id)}
                  className="px-2 py-1 bg-red-500 rounded text-white hover:bg-red-600"
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import db from '../config/db.js';

export const getStudents = (callback) => {
  db.query('SELECT * FROM students', callback);
};

export const getStudentById = (id, callback) => {
  db.query('SELECT * FROM students WHERE id = ?', [id], callback);
};

export const createStudent = (student, callback) => {
  db.query('INSERT INTO students SET ?', student, callback);
};

export const updateStudent = (id, student, callback) => {
  db.query('UPDATE students SET ? WHERE id = ?', [student, id], callback);
};

export const deleteStudent = (id, callback) => {
  db.query('DELETE FROM students WHERE id = ?', [id], callback);
};

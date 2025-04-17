import * as Student from '../models/studentModel.js';

export const getAllStudents = (req, res) => {
  Student.getStudents((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

export const getOneStudent = (req, res) => {
  Student.getStudentById(req.params.id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
};

export const createStudent = (req, res) => {
  Student.createStudent(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

export const updateStudent = (req, res) => {
  Student.updateStudent(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Updated successfully' });
  });
};

export const deleteStudent = (req, res) => {
  Student.deleteStudent(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Deleted successfully' });
  });
};
